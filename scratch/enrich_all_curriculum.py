#!/usr/bin/env python3
"""
scratch/enrich_all_curriculum.py
Adds targeted questions to quiz-app/banks and flashcards to flash-app/decks
to achieve 100% comprehensive coverage of all AZ-104 skills measured domains.
"""

import json
import os
import sys

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
QUIZ_BANKS_DIR = os.path.join(BASE_DIR, "quiz-app", "banks")
FLASH_DECKS_DIR = os.path.join(BASE_DIR, "flash-app", "decks")

# ==============================================================================
# 1. NEW QUIZ QUESTIONS
# ==============================================================================

NEW_QUIZ_QUESTIONS = {
    "path-01.json": [
        {
            "id": "q-p01-m02-15",
            "section": "01-prerequisites-for-azure-administrators",
            "topic": "Bicep - Modifying Templates with Expressions",
            "question": "You are modifying an existing Bicep file to configure storage SKU dynamically based on an environment parameter `environmentType`. If `environmentType == 'prod'`, SKU should be `Standard_GRS`, otherwise `Standard_LRS`. Which Bicep ternary expression correctly implements this logic?",
            "choices": [
                { "id": "c1", "text": "var skuName = environmentType == 'prod' ? 'Standard_GRS' : 'Standard_LRS'", "correct": True },
                { "id": "c2", "text": "if (environmentType == 'prod') { var skuName = 'Standard_GRS' } else { 'Standard_LRS' }", "correct": False },
                { "id": "c3", "text": "var skuName = iif(environmentType == 'prod', 'Standard_GRS', 'Standard_LRS')", "correct": False },
                { "id": "c4", "text": "select case environmentType when 'prod' then 'Standard_GRS' else 'Standard_LRS'", "correct": False }
            ],
            "explanation": "Bicep supports standard ternary conditional operators using `condition ? trueValue : FalseValue`. This allows concise inline dynamic property resolution without verbose ARM JSON `[if(...)]` functions.",
            "source": "Exam Ref AZ-104, Ch. 3, p. 136; MS Learn Bicep Basics, Unit 4"
        },
        {
            "id": "q-p01-m02-16",
            "section": "01-prerequisites-for-azure-administrators",
            "topic": "Bicep - Decompiling ARM JSON Templates",
            "question": "An organization has a library of legacy ARM JSON templates. You need to convert an existing ARM template file named `storage.json` into a modern Azure Bicep file. Which Azure CLI command performs this conversion?",
            "choices": [
                { "id": "c1", "text": "`az bicep decompile --file storage.json`", "correct": True },
                { "id": "c2", "text": "`az bicep build --file storage.json`", "correct": False },
                { "id": "c3", "text": "`az deployment group convert --template-file storage.json --format bicep`", "correct": False },
                { "id": "c4", "text": "`az resource transform --input storage.json --to bicep`", "correct": False }
            ],
            "explanation": "The `az bicep decompile` command converts an existing ARM JSON template into an equivalent Bicep file (`.bicep`), allowing teams to modernize their infrastructure-as-code repository.",
            "source": "Exam Ref AZ-104, Ch. 3, p. 137; MS Learn Bicep Basics, Unit 5"
        },
        {
            "id": "q-p01-m02-17",
            "section": "01-prerequisites-for-azure-administrators",
            "topic": "ARM Templates - Exporting Deployments",
            "question": "An administrator manually provisions a complex web architecture in the Azure portal and wants to export the complete resource configuration as a reusable ARM JSON template. Where can this template be exported directly from the portal?",
            "choices": [
                { "id": "c1", "text": "From the Resource Group blade under Automation > 'Export template', or from the Resource Group 'Deployments' history blade.", "correct": True },
                { "id": "c2", "text": "Only by submitting a service request to Azure Support.", "correct": False },
                { "id": "c3", "text": "From Azure Cost Management under Export invoices.", "correct": False },
                { "id": "c4", "text": "From Microsoft Entra ID under App Registrations.", "correct": False }
            ],
            "explanation": "Azure allows exporting existing configurations as ARM templates either at the Resource Group level (under 'Export template') or by opening a past deployment record in the resource group's 'Deployments' history blade and selecting 'Template'.",
            "source": "Exam Ref AZ-104, Ch. 3, p. 134; MS Learn Deploy Infrastructure ARM, Unit 5"
        },
        {
            "id": "q-p01-m02-18",
            "section": "01-prerequisites-for-azure-administrators",
            "topic": "Bicep - Native CLI Deployment",
            "question": "You have written a file named `main.bicep`. How do you deploy this file directly to a resource group named `rg-prod` using the Azure CLI without manually compiling it to JSON first?",
            "choices": [
                { "id": "c1", "text": "`az deployment group create --resource-group rg-prod --template-file main.bicep`", "correct": True },
                { "id": "c2", "text": "`az bicep publish --file main.bicep --target rg-prod`", "correct": False },
                { "id": "c3", "text": "`az resource deploy --group rg-prod --file main.bicep`", "correct": False },
                { "id": "c4", "text": "`az group create --name rg-prod --bicep-file main.bicep`", "correct": False }
            ],
            "explanation": "The Azure CLI natively supports Bicep files via the standard `az deployment group create` command with the `--template-file` parameter pointing directly to `.bicep`. The Azure CLI automatically transpiles the Bicep file in memory during submission.",
            "source": "Exam Ref AZ-104, Ch. 3, p. 136; MS Learn Bicep Basics, Unit 3"
        }
    ],
    "path-02.json": [
        {
            "id": "q-p02-m04-11",
            "section": "02-manage-identities-and-governance",
            "topic": "Azure Cost Management - Budgets & Alerts",
            "question": "An IT department sets a monthly budget of $10,000 for a subscription. The finance manager wants an email notification when spending reaches 80% of the budget ($8,000) and another notification if the machine learning model projects that spending will exceed 100% before the end of the month. What feature in Azure Cost Management configures this?",
            "choices": [
                { "id": "c1", "text": "Azure Budget alerts with an 'Actual' spending condition at 80% and a 'Forecasted' spending condition at 100%.", "correct": True },
                { "id": "c2", "text": "Azure Advisor high-availability alerts.", "correct": False },
                { "id": "c3", "text": "Azure Service Health scheduled maintenance alerts.", "correct": False },
                { "id": "c4", "text": "Log Analytics daily cap thresholds.", "correct": False }
            ],
            "explanation": "Azure Cost Management Budgets support both 'Actual' alerts (triggering when current accrued spend crosses a percentage threshold) and 'Forecasted' alerts (triggering when Azure predictive algorithms project that total spend will cross a threshold by the end of the billing period).",
            "source": "Exam Ref AZ-104, Ch. 1, pp. 34–36; MS Learn Manage Subscriptions, Unit 4"
        },
        {
            "id": "q-p02-m04-12",
            "section": "02-manage-identities-and-governance",
            "topic": "Azure Advisor - Cost Recommendations",
            "question": "Which specific recommendation does Azure Advisor provide under the 'Cost' category to reduce monthly cloud expenditure?",
            "choices": [
                { "id": "c1", "text": "Identifying and shutting down underutilized or idle virtual machines, and purchasing reserved instances for stable workloads.", "correct": True },
                { "id": "c2", "text": "Increasing the number of fault domains in availability sets.", "correct": False },
                { "id": "c3", "text": "Converting Standard SSDs to Ultra Disks.", "correct": False },
                { "id": "c4", "text": "Enabling Cross-Region Restore on backup vaults.", "correct": False }
            ],
            "explanation": "Azure Advisor analyzes resource telemetry (such as CPU, RAM, and network utilization over 7+ days) to recommend cost optimizations, including resizing or shutting down low-utilization VMs, deleting unattached managed disks, and buying 1-year or 3-year Azure Reserved Instances.",
            "source": "Exam Ref AZ-104, Ch. 1, pp. 36–37; MS Learn Manage Subscriptions, Unit 5"
        },
        {
            "id": "q-p02-m04-13",
            "section": "02-manage-identities-and-governance",
            "topic": "Resource Tags - Inheritance Behavior",
            "question": "An administrator applies the tag `CostCenter: 1042` to a Resource Group. Subsequently, a developer deploys a new Virtual Machine into that Resource Group. What happens to the tag on the newly deployed Virtual Machine?",
            "choices": [
                { "id": "c1", "text": "The Virtual Machine does NOT inherit the tag; tags on resource groups do not automatically propagate down to child resources.", "correct": True },
                { "id": "c2", "text": "The Virtual Machine automatically inherits `CostCenter: 1042`.", "correct": False },
                { "id": "c3", "text": "The deployment fails unless the VM explicitly specifies the exact same tag.", "correct": False },
                { "id": "c4", "text": "The tag is applied to the VM's OS disk only.", "correct": False }
            ],
            "explanation": "Tags applied to a resource group or subscription do NOT automatically inherit to the resources contained within them. To enforce tag inheritance, organizations deploy an Azure Policy with the `Modify` or `Append` effect.",
            "source": "Exam Ref AZ-104, Ch. 1, p. 33; MS Learn Azure Governance, Unit 4"
        },
        {
            "id": "q-p02-m04-14",
            "section": "02-manage-identities-and-governance",
            "topic": "Resource Moves - Dependencies & Scope",
            "question": "You are moving an Azure Virtual Machine named `VM-App` from `ResourceGroup-A` to `ResourceGroup-B` in the same subscription. Which related resources MUST be moved together in the same operation?",
            "choices": [
                { "id": "c1", "text": "The VM, its attached managed disks (OS and data), and its network interface card (NIC).", "correct": True },
                { "id": "c2", "text": "Only the virtual machine entity; disks and NICs stay in the source group.", "correct": False },
                { "id": "c3", "text": "The entire virtual network and all subnets.", "correct": False },
                { "id": "c4", "text": "The Azure Key Vault hosting tenant secrets.", "correct": False }
            ],
            "explanation": "When moving a virtual machine to another resource group or subscription, all dependent child resources—specifically the VM itself, its OS and attached data disks, and its primary NIC—must be moved simultaneously in the same operation.",
            "source": "Exam Ref AZ-104, Ch. 1, pp. 31–32; MS Learn Azure Governance, Unit 3"
        }
    ],
    "path-03.json": [
        {
            "id": "q-p03-m02-11",
            "section": "03-configure-and-manage-virtual-networks",
            "topic": "NSG - Effective Security Rules Tool",
            "question": "A web VM cannot receive HTTP traffic. An NSG is attached to the VM's subnet, and a second NSG is attached directly to the VM's network interface (NIC). What tool should you use to see the unified, net traffic evaluation of both NSGs?",
            "choices": [
                { "id": "c1", "text": "The 'Effective security rules' blade on the VM Network Interface (or Network Watcher).", "correct": True },
                { "id": "c2", "text": "Azure Advisor Security dashboard.", "correct": False },
                { "id": "c3", "text": "Network Watcher Connection Monitor.", "correct": False },
                { "id": "c4", "text": "The route table effective routes view.", "correct": False }
            ],
            "explanation": "The 'Effective security rules' tool aggregates rules across both the subnet-level NSG and NIC-level NSG, displaying the combined priorities, matching rules, and the final Allow or Deny verdict for each port and direction.",
            "source": "Exam Ref AZ-104, Ch. 4, pp. 235–237; MS Learn Configure NSGs, Unit 4"
        },
        {
            "id": "q-p03-m06-11",
            "section": "03-configure-and-manage-virtual-networks",
            "topic": "Load Balancer - Session Persistence Modes",
            "question": "A web application requires that once a user establishes a session from their office IP, all subsequent requests from that user must be routed to the exact same backend VM instance. Which session persistence setting on the Azure Load Balancer rule configures this?",
            "choices": [
                { "id": "c1", "text": "Client IP (2-tuple hash based on Source IP and Destination IP)", "correct": True },
                { "id": "c2", "text": "None (default 5-tuple hash based on IP and port tuples)", "correct": False },
                { "id": "c3", "text": "Cookie-based session affinity", "correct": False },
                { "id": "c4", "text": "Round-robin DNS weighted distribution", "correct": False }
            ],
            "explanation": "Azure Load Balancer supports session persistence configured via 'Client IP' (2-tuple hash: source IP, destination IP) or 'Client IP and protocol' (3-tuple hash: source IP, destination IP, protocol). Cookie affinity is only supported on Layer 7 Application Gateways, not Layer 4 Load Balancers.",
            "source": "Exam Ref AZ-104, Ch. 4, pp. 268–269; MS Learn Configure Load Balancers, Unit 4"
        },
        {
            "id": "q-p03-m06-12",
            "section": "03-configure-and-manage-virtual-networks",
            "topic": "Load Balancer - Health Probe IP Address",
            "question": "An administrator attaches a custom Network Security Group (NSG) to a subnet hosting backend VMs for an Azure Load Balancer. Which IP address must be allowed inbound on the health probe port so the Load Balancer can determine instance health?",
            "choices": [
                { "id": "c1", "text": "`168.63.129.16` (or the `AzureLoadBalancer` service tag)", "correct": True },
                { "id": "c2", "text": "`10.0.0.1`", "correct": False },
                { "id": "c3", "text": "`127.0.0.1`", "correct": False },
                { "id": "c4", "text": "`192.168.1.254`", "correct": False }
            ],
            "explanation": "The virtual public IP address `168.63.129.16` is used by the Azure platform for health probes, DHCP, DNS, and VM agent heartbeats. Blocking `168.63.129.16` or removing the default `AzureLoadBalancer` allow rule causes health probes to fail, taking all backend instances out of rotation.",
            "source": "Exam Ref AZ-104, Ch. 4, pp. 269–270; MS Learn Configure Load Balancers, Unit 4"
        },
        {
            "id": "q-p03-m08-11",
            "section": "03-configure-and-manage-virtual-networks",
            "topic": "Network Watcher - Connection Monitor",
            "question": "You need to continuously test network reachability, measure packet loss, and monitor round-trip latency between an Azure VM and an on-premises database server over an ExpressRoute connection. Which Network Watcher feature should you deploy?",
            "choices": [
                { "id": "c1", "text": "Connection Monitor", "correct": True },
                { "id": "c2", "text": "IP Flow Verify", "correct": False },
                { "id": "c3", "text": "Next Hop", "correct": False },
                { "id": "c4", "text": "Security Group View", "correct": False }
            ],
            "explanation": "Connection Monitor provides unified end-to-end continuous synthetic connection monitoring across hybrid networks, multi-cloud architectures, and Azure VNets, tracking packet loss, latency, and intermediate network hops over time.",
            "source": "Exam Ref AZ-104, Ch. 4, pp. 278–280; MS Learn Network Watcher, Unit 4"
        }
    ],
    "path-04.json": [
        {
            "id": "q-p04-m01-15",
            "section": "04-implement-and-manage-storage",
            "topic": "Data Transfer - AzCopy vs Storage Explorer",
            "question": "You are writing an automated batch script to upload 10 TB of daily backup files from an on-premises server to an Azure Blob container with optimal performance, automatic retry, and directory synchronization. Which command-line tool should you use?",
            "choices": [
                { "id": "c1", "text": "`azcopy copy` or `azcopy sync`", "correct": True },
                { "id": "c2", "text": "Azure Storage Explorer GUI", "correct": False },
                { "id": "c3", "text": "Windows Explorer mapped drive", "correct": False },
                { "id": "c4", "text": "`ftp.exe` script", "correct": False }
            ],
            "explanation": "AzCopy is Microsoft's high-performance command-line utility built for copying data to and from Azure Blob and File storage. It supports automatic resuming, parallel concurrency, and directory synchronization (`azcopy sync`), making it the premier tool for scriptable large-scale data transfers.",
            "source": "Exam Ref AZ-104, Ch. 2, pp. 95–97; MS Learn Configure Storage Accounts, Unit 6"
        },
        {
            "id": "q-p04-m02-15",
            "section": "04-implement-and-manage-storage",
            "topic": "Blob Storage - Container Soft Delete",
            "question": "How does Container Soft Delete differ from Blob Soft Delete in Azure Blob Storage?",
            "choices": [
                { "id": "c1", "text": "Container soft delete protects entire containers (and all blobs inside them) from accidental deletion, allowing the whole container to be restored with a single undelete operation.", "correct": True },
                { "id": "c2", "text": "Container soft delete only works if the storage account is configured with GRS.", "correct": False },
                { "id": "c3", "text": "Container soft delete automatically moves deleted containers to the Archive tier.", "correct": False },
                { "id": "c4", "text": "Container soft delete cannot be restored once deleted.", "correct": False }
            ],
            "explanation": "Container Soft Delete protects against accidental or malicious deletion of an entire container. When enabled, a deleted container is retained for a configurable retention window (1 to 365 days) and can be restored intact along with all its constituent blobs.",
            "source": "Exam Ref AZ-104, Ch. 2, p. 116; MS Learn Configure Blob Storage, Unit 6"
        },
        {
            "id": "q-p04-m03-15",
            "section": "04-implement-and-manage-storage",
            "topic": "Storage Security - Infrastructure Encryption",
            "question": "A financial client requires double encryption of data at rest at two separate layers (the service level and the underlying physical disk hardware infrastructure) using two distinct 256-bit AES keys. Which storage account feature must be enabled at account creation time?",
            "choices": [
                { "id": "c1", "text": "Infrastructure encryption (double encryption)", "correct": True },
                { "id": "c2", "text": "Customer-managed keys only", "correct": False },
                { "id": "c3", "text": "Secure transfer required", "correct": False },
                { "id": "c4", "text": "Azure Disk Encryption with BitLocker", "correct": False }
            ],
            "explanation": "Infrastructure Encryption enables 256-bit AES double encryption at both the service layer and the infrastructure hardware layer using two separate encryption keys. It can only be enabled during storage account creation and cannot be toggled later.",
            "source": "Exam Ref AZ-104, Ch. 2, p. 87; MS Learn Configure Storage Security, Unit 5"
        }
    ],
    "path-05.json": [
        {
            "id": "q-p05-m01-16",
            "section": "05-deploy-and-manage-compute-resources",
            "topic": "VM Security - Encryption at Host",
            "question": "You need to encrypt the temporary disk, ephemeral OS disk, and memory caches of an Azure Virtual Machine end-to-end at rest on the physical hypervisor host without consuming CPU cycles inside the guest operating system. Which feature should you enable?",
            "choices": [
                { "id": "c1", "text": "Encryption at Host", "correct": True },
                { "id": "c2", "text": "Azure Disk Encryption with BitLocker", "correct": False },
                { "id": "c3", "text": "Server-Side Encryption with Customer-Managed Keys", "correct": False },
                { "id": "c4", "text": "Windows EFS file encryption", "correct": False }
            ],
            "explanation": "Encryption at Host performs hardware encryption directly on the Azure physical host server hosting the VM. Data on temporary disks, OS disk caches, and data disk caches is encrypted at rest before flowing over storage networks to Azure Storage, with zero overhead on the VM's CPU.",
            "source": "Exam Ref AZ-104, Ch. 3, p. 159; MS Learn Intro to Azure Virtual Machines, Unit 4"
        },
        {
            "id": "q-p05-m01-17",
            "section": "05-deploy-and-manage-compute-resources",
            "topic": "Virtual Machines - Cross-Region Move with Resource Mover",
            "question": "You need to move an existing production Azure Virtual Machine and its dependent networking resources from `East US` to `West US 2`. Which dedicated Azure service orchestrates and automates this cross-region relocation?",
            "choices": [
                { "id": "c1", "text": "Azure Resource Mover", "correct": True },
                { "id": "c2", "text": "Azure Migrate", "correct": False },
                { "id": "c3", "text": "Azure Site Recovery CLI", "correct": False },
                { "id": "c4", "text": "Azure Data Box", "correct": False }
            ],
            "explanation": "Azure Resource Mover is the dedicated Azure service designed to orchestrate moving existing Azure resources (including VMs, virtual networks, and load balancers) across Azure regions, validating dependencies and managing replication and cleanup.",
            "source": "Exam Ref AZ-104, Ch. 3, p. 158; MS Learn Intro to Azure Virtual Machines, Unit 3"
        },
        {
            "id": "q-p05-m05-13",
            "section": "05-deploy-and-manage-compute-resources",
            "topic": "Azure Container Apps (ACA) - Core Concepts",
            "question": "What is the primary difference between Azure Container Apps (ACA) and Azure Container Instances (ACI)?",
            "choices": [
                { "id": "c1", "text": "ACA provides a fully managed serverless microservice application platform built on AKS that includes dynamic revisions, built-in ingress, and Dapr support, whereas ACI is for simple isolated container execution.", "correct": True },
                { "id": "c2", "text": "ACI supports Linux while ACA only supports Windows Server 2016.", "correct": False },
                { "id": "c3", "text": "ACA requires manual Kubernetes node management and patching.", "correct": False },
                { "id": "c4", "text": "ACI is only available in US government regions.", "correct": False }
            ],
            "explanation": "Azure Container Apps (ACA) is built on top of Azure Kubernetes Service and provides a higher-level serverless platform tailored for microservices, featuring ingress routing, multiple revision splits for A/B testing, and background event-driven scaling.",
            "source": "Exam Ref AZ-104, Ch. 3, pp. 179–181; MS Learn Configure ACI, Unit 2"
        },
        {
            "id": "q-p05-m05-14",
            "section": "05-deploy-and-manage-compute-resources",
            "topic": "Azure Container Apps - Scaling with KEDA",
            "question": "Which open-source scaling component is embedded inside Azure Container Apps (ACA) to enable event-driven autoscaling based on queue messages, HTTP traffic, or schedule, including scaling down to zero replicas?",
            "choices": [
                { "id": "c1", "text": "KEDA (Kubernetes Event-driven Autoscaling)", "correct": True },
                { "id": "c2", "text": "Docker Swarm Autoscale", "correct": False },
                { "id": "c3", "text": "Azure Automation DSC", "correct": False },
                { "id": "c4", "text": "Apache Mesos scheduler", "correct": False }
            ],
            "explanation": "Azure Container Apps embeds KEDA (Kubernetes Event-driven Autoscaling). KEDA allows container apps to autoscale horizontally based on external metrics (such as messages in an Azure Service Bus queue, HTTP requests per second, or CPU/memory), including scaling down to 0 instances to eliminate compute costs during idle periods.",
            "source": "Exam Ref AZ-104, Ch. 3, pp. 181–183; MS Learn Configure ACI, Unit 3"
        }
    ],
    "path-06.json": [
        {
            "id": "q-p06-m01-15",
            "section": "06-monitor-and-back-up-resources",
            "topic": "Azure Site Recovery (ASR) - Core Architecture",
            "question": "Which Azure BCDR service provides continuous block-level data replication, automated failover, and disaster recovery orchestration for Azure VMs between paired regions?",
            "choices": [
                { "id": "c1", "text": "Azure Site Recovery (ASR)", "correct": True },
                { "id": "c2", "text": "Azure Backup Vault", "correct": False },
                { "id": "c3", "text": "Azure Traffic Manager", "correct": False },
                { "id": "c4", "text": "Azure Import/Export Service", "correct": False }
            ],
            "explanation": "Azure Site Recovery (ASR) is Azure's disaster recovery service. It orchestrates replication of virtual machines (Azure VMs, VMware, physical servers), providing low RPO/RTO failover and failback to a secondary recovery region.",
            "source": "Exam Ref AZ-104, Ch. 5, pp. 348–350; MS Learn Intro to Azure Backup, Unit 2"
        },
        {
            "id": "q-p06-m01-16",
            "section": "06-monitor-and-back-up-resources",
            "topic": "Site Recovery - Test Failover Drill",
            "question": "Your company's compliance policy requires conducting a quarterly disaster recovery drill for an Azure VM replicated via Azure Site Recovery. The test must NOT cause downtime in production or interrupt ongoing replication. Which action should you execute?",
            "choices": [
                { "id": "c1", "text": "Perform a 'Test Failover' and select an isolated non-production virtual network in the recovery region.", "correct": True },
                { "id": "c2", "text": "Perform a 'Planned Failover' and reboot the primary VM.", "correct": False },
                { "id": "c3", "text": "Perform an 'Unplanned Failover' and delete the production storage account.", "correct": False },
                { "id": "c4", "text": "Stop replication, export the VHD, and mount it via PowerShell.", "correct": False }
            ],
            "explanation": "A 'Test Failover' creates temporary test VMs in an isolated non-production virtual network in the recovery region to validate disaster recovery readiness without impacting ongoing production operations or halting replication.",
            "source": "Exam Ref AZ-104, Ch. 5, pp. 351–352; MS Learn Intro to Azure Backup, Unit 5"
        },
        {
            "id": "q-p06-m01-17",
            "section": "06-monitor-and-back-up-resources",
            "topic": "Site Recovery - Planned vs Unplanned Failover",
            "question": "In Azure Site Recovery, what is the crucial operational difference between a 'Planned Failover' and an 'Unplanned Failover'?",
            "choices": [
                { "id": "c1", "text": "A Planned Failover shuts down the source VM and flushes all pending data to ensure zero data loss before failover; an Unplanned Failover initiates immediate failover during an unexpected outage and may experience minor data loss based on the last RPO.", "correct": True },
                { "id": "c2", "text": "A Planned Failover deletes all secondary data disks; an Unplanned Failover keeps them.", "correct": False },
                { "id": "c3", "text": "An Unplanned Failover can only be run once per calendar year.", "correct": False },
                { "id": "c4", "text": "Planned Failovers are only supported on Windows VMs.", "correct": False }
            ],
            "explanation": "Planned Failover gracefully shuts down the source VM, synchronizes all remaining data blocks to the target region, and powers on the target VM, guaranteeing zero data loss. Unplanned Failover is executed during unplanned outages where the primary site is unreachable.",
            "source": "Exam Ref AZ-104, Ch. 5, pp. 352–353; MS Learn Intro to Azure Backup, Unit 5"
        },
        {
            "id": "q-p06-m03-15",
            "section": "06-monitor-and-back-up-resources",
            "topic": "Backup Monitoring - Backup Reports with Log Analytics",
            "question": "How do you generate long-term enterprise audit reports, capacity trend analysis, and policy compliance reporting across all Recovery Services Vaults in an Azure tenant?",
            "choices": [
                { "id": "c1", "text": "Configure Diagnostic Settings on each vault to stream Azure Backup data to a Log Analytics Workspace, then view Backup Reports in Backup Center.", "correct": True },
                { "id": "c2", "text": "Download CSV files manually from each VM's backup blade every Friday.", "correct": False },
                { "id": "c3", "text": "Enable IP Flow Verify on the backup subnets.", "correct": False },
                { "id": "c4", "text": "Create an Azure Advisor alert rule.", "correct": False }
            ],
            "explanation": "Azure Backup Reports utilizes a Log Analytics Workspace as its reporting repository. By sending vault diagnostic logs to Log Analytics, administrators can view rich historical dashboards in Backup Center covering backup storage trends, restore success rates, and policy compliance.",
            "source": "Exam Ref AZ-104, Ch. 5, pp. 340–342; MS Learn Monitor VMs with Azure Monitor, Unit 3"
        }
    ]
}

# ==============================================================================
# 2. NEW FLASHCARDS
# ==============================================================================

NEW_FLASHCARDS = {
    "path-01.json": [
        {
            "id": "p01-m02-15",
            "section": "01-prerequisites-for-azure-administrators",
            "topic": "Bicep - Syntax Advantages",
            "question": "What primary syntax advantages does Azure Bicep offer compared to JSON ARM templates?",
            "answer": "Bicep provides cleaner concise syntax, direct module reuse, automatic dependency management via symbolic names, and eliminates complex JSON bracket escaping.",
            "source": "Exam Ref AZ-104, Ch. 3, p. 135; MS Learn Bicep Basics, Unit 2"
        },
        {
            "id": "p01-m02-16",
            "section": "01-prerequisites-for-azure-administrators",
            "topic": "Bicep - Decompiling ARM JSON",
            "question": "What CLI command converts an existing ARM JSON template into an equivalent Bicep file?",
            "answer": "`az bicep decompile --file <template.json>`",
            "source": "Exam Ref AZ-104, Ch. 3, p. 137; MS Learn Bicep Basics, Unit 5"
        },
        {
            "id": "p01-m02-17",
            "section": "01-prerequisites-for-azure-administrators",
            "topic": "ARM Templates - Export Deployment",
            "question": "Where can you export an existing resource group's configuration as an ARM template?",
            "answer": "In the Azure Portal under Resource Group > 'Export template', or under Resource Group > 'Deployments' history.",
            "source": "Exam Ref AZ-104, Ch. 3, p. 134; MS Learn Deploy Infrastructure ARM, Unit 5"
        },
        {
            "id": "p01-m02-18",
            "section": "01-prerequisites-for-azure-administrators",
            "topic": "Bicep - Direct Deployment Command",
            "question": "Which Azure CLI command directly deploys a `.bicep` file to a resource group without precompiling to JSON?",
            "answer": "`az deployment group create --resource-group <rg> --template-file <main.bicep>`",
            "source": "Exam Ref AZ-104, Ch. 3, p. 136; MS Learn Bicep Basics, Unit 3"
        }
    ],
    "path-02.json": [
        {
            "id": "p02-m04-11",
            "section": "02-manage-identities-and-governance",
            "topic": "Azure Cost Management - Budget Alert Types",
            "question": "What two condition types can trigger an Azure Cost Management budget alert?",
            "answer": "1. Actual spending (current accrued spend crosses threshold); 2. Forecasted spending (projected spend will cross threshold by period end).",
            "source": "Exam Ref AZ-104, Ch. 1, p. 35; MS Learn Manage Subscriptions, Unit 4"
        },
        {
            "id": "p02-m04-12",
            "section": "02-manage-identities-and-governance",
            "topic": "Azure Advisor - Cost Recommendations",
            "question": "What key cost-reduction suggestions does Azure Advisor produce for compute resources?",
            "answer": "Shutting down or resizing underutilized/idle virtual machines, and purchasing 1- or 3-year Azure Reserved Instances.",
            "source": "Exam Ref AZ-104, Ch. 1, pp. 36–37; MS Learn Manage Subscriptions, Unit 5"
        },
        {
            "id": "p02-m04-13",
            "section": "02-manage-identities-and-governance",
            "topic": "Resource Tags - Inheritance Rule",
            "question": "Do resource tags applied to a Resource Group automatically inherit down to child resources?",
            "answer": "No. Tags do not automatically inherit. An Azure Policy with `Modify` or `Append` effect is required to propagate tags.",
            "source": "Exam Ref AZ-104, Ch. 1, p. 33; MS Learn Azure Governance, Unit 4"
        },
        {
            "id": "p02-m04-14",
            "section": "02-manage-identities-and-governance",
            "topic": "Resource Groups - Moving Virtual Machines",
            "question": "When moving a VM to another resource group, what dependent resources must be moved simultaneously?",
            "answer": "The virtual machine, its network interface card (NIC), and all attached OS and data managed disks.",
            "source": "Exam Ref AZ-104, Ch. 1, p. 32; MS Learn Azure Governance, Unit 3"
        }
    ],
    "path-03.json": [
        {
            "id": "p03-m02-11",
            "section": "03-configure-and-manage-virtual-networks",
            "topic": "NSG - Effective Security Rules Tool",
            "question": "What tool reveals the combined, evaluated Allow/Deny verdict when NSGs exist on both a Subnet and a VM NIC?",
            "answer": "The 'Effective security rules' tool in Network Watcher or on the VM NIC blade.",
            "source": "Exam Ref AZ-104, Ch. 4, p. 235; MS Learn Configure NSGs, Unit 4"
        },
        {
            "id": "p03-m06-11",
            "section": "03-configure-and-manage-virtual-networks",
            "topic": "Azure Load Balancer - Session Persistence Hash",
            "question": "Which session persistence setting on an Azure Load Balancer rule binds a client to the same backend VM based on source and destination IP?",
            "answer": "'Client IP' (2-tuple hash: Source IP, Destination IP).",
            "source": "Exam Ref AZ-104, Ch. 4, p. 268; MS Learn Configure Load Balancers, Unit 4"
        },
        {
            "id": "p03-m06-12",
            "section": "03-configure-and-manage-virtual-networks",
            "topic": "Load Balancer - Platform Health Probe IP",
            "question": "Which virtual IP address originates Azure Load Balancer health probes and must not be blocked by NSGs?",
            "answer": "`168.63.129.16` (covered by default tag `AzureLoadBalancer`).",
            "source": "Exam Ref AZ-104, Ch. 4, p. 269; MS Learn Configure Load Balancers, Unit 4"
        },
        {
            "id": "p03-m08-11",
            "section": "03-configure-and-manage-virtual-networks",
            "topic": "Network Watcher - Connection Monitor Purpose",
            "question": "What Network Watcher capability provides continuous synthetic testing of latency, packet loss, and topology across hybrid connections?",
            "answer": "Connection Monitor.",
            "source": "Exam Ref AZ-104, Ch. 4, p. 278; MS Learn Network Watcher, Unit 4"
        }
    ],
    "path-04.json": [
        {
            "id": "p04-m01-15",
            "section": "04-implement-and-manage-storage",
            "topic": "Data Transfer - AzCopy Command Purpose",
            "question": "What is the primary command-line tool optimized for scriptable, high-speed, resumable blob and file data transfers to Azure Storage?",
            "answer": "AzCopy (`azcopy copy` / `azcopy sync`).",
            "source": "Exam Ref AZ-104, Ch. 2, p. 95; MS Learn Configure Storage Accounts, Unit 6"
        },
        {
            "id": "p04-m02-15",
            "section": "04-implement-and-manage-storage",
            "topic": "Blob Storage - Container Soft Delete Scope",
            "question": "What does Container Soft Delete protect in Azure Blob Storage?",
            "answer": "It protects entire deleted containers (and all contained blobs) from permanent deletion for a retention period of 1 to 365 days.",
            "source": "Exam Ref AZ-104, Ch. 2, p. 116; MS Learn Configure Blob Storage, Unit 6"
        },
        {
            "id": "p04-m03-15",
            "section": "04-implement-and-manage-storage",
            "topic": "Storage Security - Infrastructure Encryption",
            "question": "What is 'Infrastructure Encryption' in Azure Storage and when must it be enabled?",
            "answer": "It provides 256-bit AES double encryption at both service and infrastructure layers; it can only be enabled during storage account creation.",
            "source": "Exam Ref AZ-104, Ch. 2, p. 87; MS Learn Configure Storage Security, Unit 5"
        }
    ],
    "path-05.json": [
        {
            "id": "p05-m01-16",
            "section": "05-deploy-and-manage-compute-resources",
            "topic": "VM Security - Encryption at Host",
            "question": "What does 'Encryption at Host' protect on an Azure Virtual Machine without CPU overhead?",
            "answer": "It encrypts temporary disks, ephemeral OS disks, and VM memory caches directly on the physical hypervisor server before data flows over the network.",
            "source": "Exam Ref AZ-104, Ch. 3, p. 159; MS Learn Intro to Azure Virtual Machines, Unit 4"
        },
        {
            "id": "p05-m01-17",
            "section": "05-deploy-and-manage-compute-resources",
            "topic": "Virtual Machines - Azure Resource Mover",
            "question": "Which Azure service coordinates moving virtual machines and dependent networking resources across different Azure regions?",
            "answer": "Azure Resource Mover.",
            "source": "Exam Ref AZ-104, Ch. 3, p. 158; MS Learn Intro to Azure Virtual Machines, Unit 3"
        },
        {
            "id": "p05-m05-13",
            "section": "05-deploy-and-manage-compute-resources",
            "topic": "Azure Container Apps (ACA) - Value Proposition",
            "question": "How does Azure Container Apps (ACA) differ from Azure Container Instances (ACI)?",
            "answer": "ACA is a serverless microservices platform built on AKS supporting dynamic traffic revisions, ingress, and Dapr, whereas ACI is for simple isolated tasks.",
            "source": "Exam Ref AZ-104, Ch. 3, p. 180; MS Learn Configure ACI, Unit 2"
        },
        {
            "id": "p05-m05-14",
            "section": "05-deploy-and-manage-compute-resources",
            "topic": "Azure Container Apps - KEDA Autoscaling",
            "question": "Which open-source scaling framework embedded in Azure Container Apps enables event-driven scaling down to zero replicas?",
            "answer": "KEDA (Kubernetes Event-driven Autoscaling).",
            "source": "Exam Ref AZ-104, Ch. 3, p. 181; MS Learn Configure ACI, Unit 3"
        }
    ],
    "path-06.json": [
        {
            "id": "p06-m01-15",
            "section": "06-monitor-and-back-up-resources",
            "topic": "Azure Site Recovery (ASR) - Core Role",
            "question": "What is the primary role of Azure Site Recovery (ASR) for Azure Virtual Machines?",
            "answer": "Orchestrating continuous replication, disaster recovery drills, failover, and failback of VMs to a secondary region.",
            "source": "Exam Ref AZ-104, Ch. 5, p. 348; MS Learn Intro to Azure Backup, Unit 2"
        },
        {
            "id": "p06-m01-16",
            "section": "06-monitor-and-back-up-resources",
            "topic": "Site Recovery - Test Failover Drill",
            "question": "How do you test Azure Site Recovery without disrupting production or stopping active replication?",
            "answer": "Execute a 'Test Failover' targeting an isolated non-production virtual network in the recovery region.",
            "source": "Exam Ref AZ-104, Ch. 5, p. 351; MS Learn Intro to Azure Backup, Unit 5"
        },
        {
            "id": "p06-m01-17",
            "section": "06-monitor-and-back-up-resources",
            "topic": "Site Recovery - Planned vs Unplanned Failover",
            "question": "What guarantees zero data loss during an Azure Site Recovery failover?",
            "answer": "Executing a 'Planned Failover', which shuts down the source VM and finishes data synchronization before initiating target failover.",
            "source": "Exam Ref AZ-104, Ch. 5, p. 352; MS Learn Intro to Azure Backup, Unit 5"
        },
        {
            "id": "p06-m03-15",
            "section": "06-monitor-and-back-up-resources",
            "topic": "Azure Backup Reports - Log Analytics Repository",
            "question": "Where does Azure Backup stream diagnostic telemetry to power tenant-wide Backup Reports in Backup Center?",
            "answer": "To an Azure Log Analytics Workspace via vault Diagnostic Settings.",
            "source": "Exam Ref AZ-104, Ch. 5, p. 340; MS Learn Monitor VMs with Azure Monitor, Unit 3"
        }
    ]
}

def main():
    print("Enriching Question Banks...")
    for filename, questions in NEW_QUIZ_QUESTIONS.items():
        filepath = os.path.join(QUIZ_BANKS_DIR, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            data = json.load(f)
        existing_ids = set(q["id"] for q in data)
        added = 0
        for q in questions:
            if q["id"] not in existing_ids:
                data.append(q)
                added += 1
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"  {filename}: Added {added} questions (Total: {len(data)})")

    print("\nEnriching Flashcard Decks...")
    for filename, cards in NEW_FLASHCARDS.items():
        filepath = os.path.join(FLASH_DECKS_DIR, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            data = json.load(f)
        existing_ids = set(c["id"] for c in data)
        added = 0
        for c in cards:
            if c["id"] not in existing_ids:
                data.append(c)
                added += 1
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"  {filename}: Added {added} cards (Total: {len(data)})")

if __name__ == "__main__":
    main()
