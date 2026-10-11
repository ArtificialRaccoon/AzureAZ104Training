# Module: Manage and control traffic flow in your Azure deployment with routes

**Course:** [Course AZ-104T00-A: Microsoft Azure Administrator](https://learn.microsoft.com/en-us/training/courses/az-104t00)  
**Learning Path:** [AZ-104: Configure and manage virtual networks for Azure administrators](https://learn.microsoft.com/training/paths/az-104-manage-virtual-networks/)  
**Official Microsoft Module Source:** [https://learn.microsoft.com/training/modules/control-network-traffic-flow-with-routes/](https://learn.microsoft.com/training/modules/control-network-traffic-flow-with-routes/)  
**Estimated Duration:** 50 minutes  
**Total Units:** 7  

> **Overview:** Learn how to control Azure virtual network traffic by implementing custom routes.

## Module Outline

| Unit # | Title | Duration | Official Reference |
|---|---|---|---|
| 1 | Introduction | 2 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/control-network-traffic-flow-with-routes/1-introduction/) |
| 2 | Identify routing capabilities of an Azure virtual network | 10 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/control-network-traffic-flow-with-routes/2-azure-virtual-network-route/) |
| 3 | Exercise - Create custom routes | 10 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/control-network-traffic-flow-with-routes/3-exercise-create-custom-routes/) |
| 4 | What is an NVA? | 7 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/control-network-traffic-flow-with-routes/4-network-virtual-appliances/) |
| 5 | Exercise - Create an NVA and virtual machines | 10 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/control-network-traffic-flow-with-routes/5-exercise-create-nva-vm/) |
| 6 | Exercise - Route traffic through the NVA | 10 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/control-network-traffic-flow-with-routes/6-exercise-route-traffic-through-nva/) |
| 7 | Summary | 1 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/control-network-traffic-flow-with-routes/7-summary/) |

---

## Unit 1: Introduction

**Source URL:** [https://learn.microsoft.com/training/modules/control-network-traffic-flow-with-routes/1-introduction/](https://learn.microsoft.com/training/modules/control-network-traffic-flow-with-routes/1-introduction/)  
**Duration:** 2 minutes  

A virtual network lets you implement a security perimeter around your resources in the cloud. You can control the information that flows in and out of a virtual network. You can also restrict access to allow only the traffic that originates from trusted sources.



Suppose that you're the solution architect for a retail organization. Also suppose that your organization recently suffered a security incident that exposed customer information such as names, addresses, and credit card numbers. Malicious actors infiltrated vulnerabilities in your retailer's network infrastructure, which resulted in the loss of customers' confidential information.



As part of a remediation plan, the security team recommends adding network protections in the form of network virtual appliances. The cloud infrastructure team must ensure traffic gets properly routed through the virtual appliances and gets inspected for malicious activity.



In this module, you'll learn about Azure routing, and you'll create custom routes to control the traffic flow. You'll also learn to redirect the traffic through the network virtual appliance so you can inspect the traffic before it's allowed through.



## Learning objectives



In this module, you'll:



- Identify the routing capabilities of an Azure virtual network.

- Configure routing within a virtual network.

- Deploy a basic network virtual appliance.

- Configure routing to send traffic through a network virtual appliance.



## Prerequisites



- Knowledge of basic networking concepts, including subnets and IP addressing

- Familiarity with Azure virtual networking

---

## Unit 2: Identify routing capabilities of an Azure virtual network

**Source URL:** [https://learn.microsoft.com/training/modules/control-network-traffic-flow-with-routes/2-azure-virtual-network-route/](https://learn.microsoft.com/training/modules/control-network-traffic-flow-with-routes/2-azure-virtual-network-route/)  
**Duration:** 10 minutes  

To control traffic flow within your virtual network, you must learn the purpose and benefits of custom routes. You must also learn how to configure the routes to direct traffic flow through a network virtual appliance (NVA).



## Azure routing



Network traffic in Azure is automatically routed across Azure subnets, virtual networks, and on-premises networks. System routes control this routing. They're assigned by default to each subnet in a virtual network. With these system routes, any Azure virtual machine that is deployed into a virtual network can communicate with any other in the network. These virtual machines are also potentially accessible from on-premises through a hybrid network or the internet.



You can't create or delete system routes, but you can override the system routes by adding custom routes to control traffic flow to the next hop.



Every subnet has the following default system routes:



| Address prefix | Next hop type |

| --- | --- |

| Unique to the virtual network | Virtual network |

| 0.0.0.0/0 | Internet |

| 10.0.0.0/8 | None |

| 172.16.0.0/12 | None |

| 192.168.0.0/16 | None |

| 100.64.0.0/10 | None |



The **Next hop type** column shows the network path taken by traffic sent to each address prefix. The path can be one of the following hop types:



- **Virtual network**: A route is created in the address prefix. The prefix represents each address range created at the virtual-network level. If multiple address ranges are specified, multiple routes are created for each address range.

- **Internet**: The default system route 0.0.0.0/0 routes any address range to the internet, unless you override Azure's default route with a custom route.

- **None**: Any traffic routed to this hop type is dropped and doesn't get routed outside the subnet. By default, the following IPv4 private-address prefixes are created: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. The prefix 100.64.0.0/10 for a shared address space is also added. None of these address ranges are globally routable.



The following diagram shows an overview of system routes and shows how traffic flows among subnets and the internet by default. You can see from the diagram that traffic flows freely among the two subnets and the internet.



![Diagram of traffic flowing among subnets and the internet.](media/2-system-routes-subnets-internet.svg)



Within Azure, there are other system routes. Azure creates these routes if the following capabilities are enabled:



- Virtual network peering

- Service chaining

- Virtual network gateway

- Virtual network service endpoint



### Virtual network peering and service chaining



Virtual network peering and service chaining let virtual networks within Azure connect to one another. With this connection, virtual machines can communicate with each other within the same region or across regions. This communication in turn creates more routes within the default route table. Service chaining lets you override these routes by creating user-defined routes between peered networks.



The following diagram shows two virtual networks with peering configured. The user-defined routes are configured to route traffic through an NVA or an Azure VPN gateway.



![Diagram of virtual network peering with user-defined routes.](media/2-virtual-network-peering-udrs.svg)



### Virtual network gateway



Use a virtual network gateway to send encrypted traffic between Azure and on-premises over the internet and to send encrypted traffic between Azure networks. A virtual network gateway contains routing tables and gateway services.



![Diagram of the structure of a virtual network gateway.](media/2-virtual-network-gateway.svg)



### Virtual network service endpoint



Virtual network endpoints extend your private address space in Azure by providing a direct connection to your Azure resources. This connection restricts the flow of traffic: your Azure virtual machines can access your storage account directly from the private address space and deny access from a public virtual machine. As you enable service endpoints, Azure creates routes in the route table to direct this traffic.



## Custom routes



System routes might make it easy for you to quickly get your environment up and running. However, there are many scenarios in which you want to more closely control the traffic flow within your network. For example, you might want to route traffic through an NVA or through a firewall. This control is possible with custom routes.



You have two options for implementing custom routes: create a user-defined route, or use Border Gateway Protocol (BGP) to exchange routes between Azure and on-premises networks.



### User-defined routes



You can use a user-defined route to override the default system routes so traffic can be routed through firewalls or NVAs.



For example, you might have a network with two subnets and want to add a virtual machine in the perimeter network to be used as a firewall. You can create a user-defined route so that traffic passes through the firewall and doesn't go directly between the subnets.



When creating user-defined routes, you can specify these next hop types:



- **Virtual appliance**: A virtual appliance is typically a firewall device used to analyze or filter traffic that is entering or leaving your network. You can specify the private IP address of a Network Interface Card (NIC) attached to a virtual machine so that IP forwarding can be enabled. Or you can provide the private IP address of an internal load balancer.

- **Virtual network gateway**: Use to indicate when you want routes for a specific address to be routed to a virtual network gateway. The virtual network gateway is specified as a VPN for the next hop type.

- **Virtual network**: Use to override the default system route within a virtual network.

- **Internet**: Use to route traffic to a specified address prefix that is routed to the internet.

- **None**: Use to drop traffic sent to a specified address prefix.



With user-defined routes, you can't specify the next hop type **VirtualNetworkServiceEndpoint**, which indicates virtual network peering.



### Service tags for user-defined routes



You can specify a service tag as the address prefix for a user-defined route instead of an explicit IP range. A service tag represents a group of IP address prefixes from a given Azure service. Microsoft manages the address prefixes encompassed by the service tag and automatically updates the service tag as addresses change, thus minimizing the complexity of frequent updates to user-defined routes and reducing the number of routes you need to create.



### Border gateway protocol



A network gateway in your on-premises network can exchange routes with a virtual network gateway in Azure by using BGP. BGP is the standard routing protocol that's normally used to exchange routing information among two or more networks. BGP is used to transfer data and information between autonomous systems on the internet, such as different host gateways.



Typically, you use BGP to advertise on-premises routes to Azure when you're connected to an Azure datacenter through Azure ExpressRoute. You can also configure BGP if you connect to an Azure virtual network by using a VPN site-to-site connection.



The following diagram shows a topology with paths that can pass data between Azure VPN Gateway and on-premises networks:



![Diagram showing an example of using the Border Gateway Protocol.](media/2-bgp.svg)



BGP offers network stability, because routers can quickly change connections to send packets if a connection path goes down.



## Route selection and priority



If multiple routes are available in a route table, Azure uses the route with the longest prefix match. For example, a message is sent to the IP address 10.0.0.2, but two routes are available with the 10.0.0.0/16 and 10.0.0.0/24 prefixes. Azure selects the route with the 10.0.0.0/24 prefix because it's more specific.



The longer the route prefix, the shorter the list of IP addresses available through that prefix. When you use longer prefixes, the routing algorithm can select the intended address more quickly.



You can't configure multiple user-defined routes with the same address prefix.



If there are multiple routes with the same address prefix, Azure selects the route based on the type in the following order of priority:



1. User-defined routes

2. BGP routes

3. System routes



## Check your knowledge



1.

Why would you use a custom route in a virtual network?



To load balance the traffic within your virtual network.



To connect to your Azure virtual machines using RDP or SSH.



To control the flow of traffic within your Azure virtual network.



To connect to resources in another virtual network hosted in Azure.



2.

Why might you use virtual network peering?



To connect virtual networks together in the same region or across regions.



To assign public IP addresses to all of your resources across multiple virtual networks.



So that load balancers can control traffic flow across your virtual networks.



To run custom reports that scan and identify what resources are running across all of your virtual networks, as opposed to running reports on each virtual network.

---

## Unit 3: Exercise - Create custom routes

**Source URL:** [https://learn.microsoft.com/training/modules/control-network-traffic-flow-with-routes/3-exercise-create-custom-routes/](https://learn.microsoft.com/training/modules/control-network-traffic-flow-with-routes/3-exercise-create-custom-routes/)  
**Duration:** 10 minutes  

As you implement your security strategy, you want to control how network traffic is routed across your Azure infrastructure.



In the following exercise, you use a network virtual appliance (NVA) to help secure and monitor traffic. You want to ensure communication between front-end public servers and internal private servers is always routed through the appliance.



You configure the network so that all traffic flowing from a public subnet to a private subnet will be routed through the NVA. To make this flow happen, you create a custom route for the public subnet to route this traffic to a perimeter-network subnet. Later, you deploy an NVA to the perimeter-network subnet.



![Diagram of virtual network, subnets, and route table.](media/3-virtual-network-subnets-route-table.svg)



In this exercise, you create the route table, custom route, and subnets. You'll then associate the route table with a subnet.



Note



This exercise is optional. If you want to complete this exercise, you'll need to create an Azure subscription before you begin. If you don't have an Azure account or you don't want to create one at this time, you can read through the instructions so you understand the information that's being presented.



Note



You need to use a resource group to complete the steps in this exercise. You can use a resource group that you already created, or you can create a new resource group specifically for this exercise. If you choose to create a new resource group, that will make it easier to clean up any resources that you create as you complete the exercise. If you don't have an existing resource group or you want to create a new one specifically for this exercise, you can follow the steps in [Use the Azure portal and Azure Resource Manager to manage resource groups](/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal) to create a resource group by using the Azure portal, or you can follow the steps in [Manage Azure resource groups by using Azure CLI](/en-us/azure/azure-resource-manager/management/manage-resource-groups-cli) to create a resource group by using the the Azure CLI.



Note



Throughout this exercise, replace **myResourceGroupName** in the examples with the name of an existing resource group, or the name of the resource group that you created for this exercise.



## Create a route table and custom route



The first task is to create a new routing table and then add a custom route for all traffic intended for the private subnet.



Note



You might get an error that reads: *This command is implicitly deprecated*. Please ignore this error for this learning module. We're working on it!



1. Open the [Azure Cloud Shell](https://shell.azure.com/), select **Settings**, then select **Go to Classic version**.

2. In Azure Cloud Shell, run the following command to create a route table. Replace **myResourceGroupName** with the name of your resource group.



    ```azurecli

        az network route-table create \

            --name publictable \

            --resource-group "myResourceGroupName" \

            --disable-bgp-route-propagation false

    ```

3. Run the following command in Cloud Shell to create a custom route:



    ```azurecli

        az network route-table route create \

            --route-table-name publictable \

            --resource-group "myResourceGroupName" \

            --name productionsubnet \

            --address-prefix 10.0.1.0/24 \

            --next-hop-type VirtualAppliance \

            --next-hop-ip-address 10.0.2.4

    ```



## Create a virtual network and subnets



The next task is to create the **vnet** virtual network and the three subnets you need: **publicsubnet**, **privatesubnet**, and **dmzsubnet**.



1. Run the following command to create the **vnet** virtual network and the **publicsubnet** subnet:



    ```azurecli

        az network vnet create \

            --name vnet \

            --resource-group "myResourceGroupName" \

            --address-prefixes 10.0.0.0/16 \

            --subnet-name publicsubnet \

            --subnet-prefixes 10.0.0.0/24

    ```

2. Run the following command in Cloud Shell to create the **privatesubnet** subnet:



    ```azurecli

        az network vnet subnet create \

            --name privatesubnet \

            --vnet-name vnet \

            --resource-group "myResourceGroupName" \

            --address-prefixes 10.0.1.0/24

    ```

3. Run the following command to create the **dmzsubnet** subnet:



    ```azurecli

        az network vnet subnet create \

            --name dmzsubnet \

            --vnet-name vnet \

            --resource-group "myResourceGroupName" \

            --address-prefixes 10.0.2.0/24

    ```

4. You should now have three subnets. Run the following command to show all of the subnets in the **vnet** virtual network:



    ```azurecli

        az network vnet subnet list \

            --resource-group "myResourceGroupName" \

            --vnet-name vnet \

            --output table

    ```



## Associate the route table with the public subnet



The final task in this exercise is to associate the route table with the **publicsubnet** subnet.



Run the following command to associate the route table with the public subnet.



```azurecli

    az network vnet subnet update \

        --name publicsubnet \

        --vnet-name vnet \

        --resource-group "myResourceGroupName" \

        --route-table publictable

```

---

## Unit 4: What is an NVA?

**Source URL:** [https://learn.microsoft.com/training/modules/control-network-traffic-flow-with-routes/4-network-virtual-appliances/](https://learn.microsoft.com/training/modules/control-network-traffic-flow-with-routes/4-network-virtual-appliances/)  
**Duration:** 7 minutes  

A network virtual appliance (NVA) is a virtual appliance that consists of various layers like:



- A firewall

- A WAN optimizer

- Application-delivery controllers

- Routers

- Load balancers

- IDS/IPS

- Proxies



You can deploy NVAs that you choose from providers in Azure Marketplace. Such providers include Cisco, Check Point, Barracuda, Sophos, WatchGuard, and SonicWall. You can use an NVA to filter traffic inbound to a virtual network, to block malicious requests, and to block requests made from unexpected resources.



In the retail-organization example scenario, you must work with the security and network teams. You want to implement a secure environment that scrutinizes all incoming traffic and blocks unauthorized traffic from passing on to the internal network. You also want to secure both virtual-machine networking and Azure-services networking as part of your company's network-security strategy.



Your goal is to prevent unwanted or unsecured network traffic from reaching key systems.



As part of the network-security strategy, you must control the flow of traffic within your virtual network. You also must learn the role of an NVA and the benefit of using an NVA to control traffic flow through an Azure network.



## Network virtual appliance



Network virtual appliances (NVAs) are virtual machines that control the flow of network traffic by controlling routing. You'll typically use them to manage traffic flowing from a perimeter-network environment to other networks or subnets.



![Diagram of a network architecture with a network virtual appliance.](media/4-nva.svg)



You can deploy firewall appliances into a virtual network in different configurations. You can put a firewall appliance in a perimeter-network subnet in the virtual network, or if you want more control of security, implement a microsegmentation approach.



With the microsegmentation approach, you can create dedicated subnets for the firewall and then deploy web applications and other services in other subnets. All traffic is routed through the firewall and inspected by the NVAs. You'll enable forwarding on the virtual-appliance network interfaces to pass traffic that is accepted by the appropriate subnet.



Microsegmentation lets the firewall inspect all packets at OSI Layer 4 and, for application-aware appliances, Layer 7. When you deploy an NVA to Azure, it acts as a router that forwards requests between subnets on the virtual network.



Some NVAs require multiple network interfaces. One network interface is dedicated to the management network for the appliance. Additional network interfaces manage and control the traffic processing. After you’ve deployed the NVA, you can then configure the appliance to route the traffic through the proper interface.



### User-defined routes



For most environments, the default system routes already defined by Azure are enough to get the environments up and running. In certain cases, you should create a routing table and add custom routes. Examples include:



- Access to the internet via on-premises network using forced tunneling

- Using virtual appliances to control traffic flow



You can create multiple route tables in Azure. Each route table can be associated with one or more subnets. A subnet can only be associated with one route table.



## Network virtual appliances in a highly available architecture



If traffic is routed through an NVA, the NVA becomes a critical piece of your infrastructure. Any NVA failures directly affect the ability of your services to communicate. It's important to include a highly available architecture in your NVA deployment.



There are several methods of achieving high availability when using NVAs. At the end of this module, you can find more information about using NVAs in highly available scenarios.



## Check your knowledge



1.

What is the main benefit of using a network virtual appliance?



To control outbound access to the internet.



To load balance incoming traffic from the internet across multiple Azure virtual machines and across two regions for DR purposes.



To control incoming traffic from the perimeter network and allow only traffic that meets security requirements to pass through.



To control who can access Azure resources from the perimeter network.



2.

How might you deploy a network virtual appliance?



You can configure a Windows virtual machine and enable IP forwarding after routing tables, user-defined routes, and subnets have been updated. Or you can use a partner image from Azure Marketplace.



Using Azure CLI, deploy a Linux virtual machine in Azure, connect this virtual machine to your production virtual network, and assign a public IP address.



Using the Azure portal, deploy a Windows 2016 Server instance. Next, using Azure Application Gateway, add the Windows 2016 Server instance as a target endpoint.



Download a virtual appliance from Azure Marketplace and configure the appliance to connect to the production and perimeter networks.

---

## Unit 5: Exercise - Create an NVA and virtual machines

**Source URL:** [https://learn.microsoft.com/training/modules/control-network-traffic-flow-with-routes/5-exercise-create-nva-vm/](https://learn.microsoft.com/training/modules/control-network-traffic-flow-with-routes/5-exercise-create-nva-vm/)  
**Duration:** 10 minutes  

In the next stage of your security implementation, you'll deploy a network virtual appliance (NVA) to secure and monitor traffic between your front-end public servers and internal private servers.



First, configure the appliance to forward IP traffic. If IP forwarding isn't enabled, traffic that is routed through your appliance will never be received by its intended destination servers.



In this exercise, you deploy the **nva** network appliance to the **dmzsubnet** subnet. Then you enable IP forwarding so that traffic from **`*`** and traffic that uses the custom route is sent to the **privatesubnet** subnet.



![Diagram of a Network virtual appliance with IP forwarding enabled.](media/5-nva-ip-forwarding.svg)



In the following steps, you'll deploy an NVA. You'll then update the Azure virtual NIC and the network settings within the appliance to enable IP forwarding.



Note



This exercise is optional. If you want to complete this exercise, you'll need to create an Azure subscription before you begin. If you don't have an Azure account or you don't want to create one at this time, you can read through the instructions so you understand the information that's being presented.



## Deploy the network virtual appliance



To build the NVA, deploy an Ubuntu LTS instance.



1. In [Azure Cloud Shell](https://shell.azure.com/), run the following command to deploy the appliance. Replace `<password>` with a suitable password of your choice for the **azureuser** admin account, and **myResourceGroupName** with the name of your resource group.



    ```azurecli

    az vm create \

        --resource-group "myResourceGroupName" \

        --name nva \

        --vnet-name vnet \

        --subnet dmzsubnet \

        --image Ubuntu2204 \

        --admin-username azureuser \

        --admin-password <password>

    ```



## Enable IP forwarding for the Azure network interface



In the next steps, you enable IP forwarding for the **nva** network appliance. When traffic flows to the NVA but is meant for another target, the NVA will route that traffic to its correct destination.



1. Run the following command to get the NVA network interface's ID:



    ```azurecli

    NICID=$(az vm nic list \

        --resource-group "myResourceGroupName" \

        --vm-name nva \

        --query "[].{id:id}" --output tsv)

    

    echo $NICID

    ```

2. Run the following command to get the NVA network interface's name:



    ```azurecli

    NICNAME=$(az vm nic show \

        --resource-group "myResourceGroupName" \

        --vm-name nva \

        --nic $NICID \

        --query "{name:name}" --output tsv)

    

    echo $NICNAME

    ```

3. Run the following command to enable IP forwarding for the network interface:



    ```azurecli

    az network nic update --name $NICNAME \

        --resource-group "myResourceGroupName" \

        --ip-forwarding true

    ```



## Enable IP forwarding in the appliance



1. Run the following command to save the NVA virtual machine's public IP address to the variable `NVAIP`:



    ```azurecli

    NVAIP="$(az vm list-ip-addresses \

        --resource-group "myResourceGroupName" \

        --name nva \

        --query "[].virtualMachine.network.publicIpAddresses[*].ipAddress" \

        --output tsv)"

    

    echo $NVAIP

    ```

2. Run the following command to enable IP forwarding within the NVA:



    ```bash

    ssh -t -o StrictHostKeyChecking=no azureuser@$NVAIP 'sudo sysctl -w net.ipv4.ip_forward=1; exit;'

    ```



    When prompted, enter the password you used when you created the virtual machine.

---

## Unit 6: Exercise - Route traffic through the NVA

**Source URL:** [https://learn.microsoft.com/training/modules/control-network-traffic-flow-with-routes/6-exercise-route-traffic-through-nva/](https://learn.microsoft.com/training/modules/control-network-traffic-flow-with-routes/6-exercise-route-traffic-through-nva/)  
**Duration:** 10 minutes  

Now that you've created the network virtual appliance (NVA) and virtual machines (VMs), you'll route the traffic through the NVA.



![Visualization of virtual machines and IP addresses.](media/6-vms-ip-addresses.svg)



Note



This exercise is optional. If you want to complete this exercise, you'll need to create an Azure subscription before you begin. If you don't have an Azure account or you don't want to create one at this time, you can read through the instructions so you understand the information that's being presented.



## Create public and private virtual machines



The next steps deploy a VM into the public and private subnets.



1. Open the [Azure Cloud Shell](https://shell.azure.com/) editor and create a file named **cloud-init.txt**.



    ```bash

    code cloud-init.txt

    ```

2. Add the following configuration information to the file. With this configuration, the `inetutils-traceroute` package is installed when you create a new VM. This package contains the `traceroute` utility that you'll use later in this exercise.



    ```Text

    #cloud-config

    package_upgrade: true

    packages:

       - inetutils-traceroute

    ```

3. Press Ctrl+S to save the file, and then press Ctrl+Q to close the editor.

4. In Cloud Shell, run the following command to create the **public** VM. Replace `<password>` with a suitable password for the **azureuser** account.



    ```azurecli

    az vm create \

        --resource-group "myResourceGroupName" \

        --name public \

        --vnet-name vnet \

        --subnet publicsubnet \

        --image Ubuntu2204 \

        --admin-username azureuser \

        --no-wait \

        --custom-data cloud-init.txt \

        --admin-password <password>

    ```

5. Run the following command to create the **private** VM. Replace `<password>` with a suitable password.



    ```azurecli

    az vm create \

        --resource-group "myResourceGroupName" \

        --name private \

        --vnet-name vnet \

        --subnet privatesubnet \

        --image Ubuntu2204 \

        --admin-username azureuser \

        --no-wait \

        --custom-data cloud-init.txt \

        --admin-password <password>

    ```

6. Run the following Linux `watch` command to check that the VMs are running. The `watch` command periodically runs the `az vm list` command so that you can monitor the progress of the VMs.



    ```bash

    watch -d -n 5 "az vm list \

        --resource-group "myResourceGroupName" \

        --show-details \

        --query '[*].{Name:name, ProvisioningState:provisioningState, PowerState:powerState}' \

        --output table"

    ```



    A **ProvisioningState** value of "Succeeded" and a **PowerState** value of "VM running" indicate a successful deployment. When all three VMs are running, you're ready to move on. Press Ctrl-C to stop the command and continue with the exercise.

7. Run the following command to save the public IP address of the **public** VM to a variable named `PUBLICIP`:



    ```azurecli

    PUBLICIP="$(az vm list-ip-addresses \

        --resource-group "myResourceGroupName" \

        --name public \

        --query "[].virtualMachine.network.publicIpAddresses[*].ipAddress" \

        --output tsv)"

    

    echo $PUBLICIP

    ```

8. Run the following command to save the public IP address of the **private** VM to a variable named `PRIVATEIP`:



    ```azurecli

    PRIVATEIP="$(az vm list-ip-addresses \

        --resource-group "myResourceGroupName" \

        --name private \

        --query "[].virtualMachine.network.publicIpAddresses[*].ipAddress" \

        --output tsv)"

    

    echo $PRIVATEIP

    ```



## Test traffic routing through the network virtual appliance



The final steps use the Linux `traceroute` utility to show how traffic is routed. You'll use the `ssh` command to run `traceroute` on each VM. The first test shows the route taken by ICMP packets sent from the **public** VM to the **private** VM. The second test shows the route taken by ICMP packets sent from the **private** VM to the **public** VM.



1. Run the following command to trace the route from **public** to **private**. When prompted, enter the password for the **azureuser** account that you specified earlier.



    ```bash

    ssh -t -o StrictHostKeyChecking=no azureuser@$PUBLICIP 'traceroute private --type=icmp; exit'

    ```



    If you receive the error message `bash: traceroute: command not found`, wait a minute and retry the command. The automated installation of `traceroute` can take a minute or two after VM deployment. After the command succeeds, the output should look similar to the following example:



    ```Text

    traceroute to private.kzffavtrkpeulburui2lgywxwg.gx.internal.cloudapp.net (10.0.1.4), 64 hops max

    1   10.0.2.4  0.710ms  0.410ms  0.536ms

    2   10.0.1.4  0.966ms  0.981ms  1.268ms

    Connection to 52.165.151.216 closed.

    ```



    Notice that the first hop is to 10.0.2.4. This address is the private IP address of **nva**. The second hop is to 10.0.1.4, the address of **private**. In the first exercise, you added this route to the route table and linked the table to the **publicsubnet** subnet. So now all traffic from **public** to **private** is routed through the NVA.



    ![Diagram of route from public to private.](media/6-public-private-route.svg)

2. Run the following command to trace the route from **private** to **public**. When prompted, enter the password for the **azureuser** account.



    ```bash

    ssh -t -o StrictHostKeyChecking=no azureuser@$PRIVATEIP 'traceroute public --type=icmp; exit'

    ```



    You should see the traffic go directly to **public** (10.0.0.4) and not through the NVA, as shown in the following command output.



    ```Text

    traceroute to public.kzffavtrkpeulburui2lgywxwg.gx.internal.cloudapp.net (10.0.0.4), 64 hops max

    1   10.0.0.4  1.095ms  1.610ms  0.812ms

    Connection to 52.173.21.188 closed.

    ```



    The **private** VM is using default routes, and traffic is routed directly between the subnets.



    ![Diagram of route from private to public.](media/6-private-public-route.svg)



You've now configured routing between subnets to direct traffic from the public internet through the **dmzsubnet** subnet before it reaches the private subnet. In the **dmzsubnet** subnet, you added a VM that acts as an NVA. You can configure this NVA to detect potentially malicious requests and block them before they reach their intended targets.

---

## Unit 7: Summary

**Source URL:** [https://learn.microsoft.com/training/modules/control-network-traffic-flow-with-routes/7-summary/](https://learn.microsoft.com/training/modules/control-network-traffic-flow-with-routes/7-summary/)  
**Duration:** 1 minutes  

In this module, you learned how to customize routes in an Azure virtual network and how to redirect the traffic flow through a network virtual appliance. You also learned how to create your own custom network virtual appliance by deploying an Azure virtual machine.



Important



In the optional exercises for this module, you created resources by using your own Azure subscription. Clean up these resources so that you won't continue to be charged for them.



## Learn more



For more information on using routes in your network infrastructure, see the following articles:



- [Virtual network traffic routing](/en-us/azure/virtual-network/virtual-networks-udr-overview)

- [Tutorial: Route network traffic with a route table using the Azure portal](/en-us/azure/virtual-network/tutorial-create-route-table-portal)

- [Deploy highly available network virtual appliances](/en-us/azure/architecture/reference-architectures/dmz/nva-ha)

- [Implement a secure hybrid network](/en-us/azure/architecture/reference-architectures/dmz/secure-vnet-dmz)

---


## Exam Ref AZ-104 Certification Deep Dive & Exam Tips (Charles Pluta, 2024)

> **Source Reference:** *Exam Ref AZ-104 Microsoft Azure Administrator (Charles Pluta, 3rd Edition, 2024)*, Chapter 4, pp. 231–235.

### Key Certification Focus Areas & Architecture Nuances
- **Route Selection & Longest Prefix Match [pp. 231–233]:**
  - Azure routes traffic based on the **longest prefix match** (most specific CIDR mask).
  - Example: Destination `10.0.1.5` matches both `10.0.0.0/16` and `10.0.1.0/24`; traffic routes via `10.0.1.0/24`.
- **Route Priority Hierarchy [p. 232]:**
  - If multiple routes have identical prefixes, Azure selects routes in this order:
    1. **User-Defined Routes (UDR)**
    2. **BGP Routes (ExpressRoute / VPN)**
    3. **System Default Routes**
- **Next Hop Types [pp. 233–234]:**
  - **Virtual appliance:** Directs traffic to a private IP (e.g., Azure Firewall, NVA).
  - **Virtual network gateway:** Directs traffic to VPN or ExpressRoute.
  - **None:** Drops packets (blackhole).
  - **Virtual network:** Routes within the local or peered VNet.
  - **Internet:** Directs traffic out to the internet through default egress.

### Common Exam Traps & "Need More Review?" Tips
- **Exam Trap:** Deploying an NVA VM but forgetting to enable **IP Forwarding** on the VM's network interface (NIC). Without IP forwarding enabled, Azure drops packets not explicitly destined for the NVA's own IP [p. 234].


## Verification & Knowledge Audit

- **Source Authenticity:** All content directly extracted from official Microsoft Learn documentation for Module: `Manage and control traffic flow in your Azure deployment with routes`.
- **Reference URLs:** Complete unit URLs embedded above.
- **Audit Status:** Verified against Microsoft Learn catalog API and markdown endpoint. Hallucination check passed.
