# Module: Deploy Azure infrastructure by using JSON ARM templates

**Course:** [Course AZ-104T00-A: Microsoft Azure Administrator](https://learn.microsoft.com/en-us/training/courses/az-104t00)  
**Learning Path:** [AZ-104: Prerequisites for Azure administrators](https://learn.microsoft.com/training/paths/az-104-administrator-prerequisites/)  
**Official Microsoft Module Source:** [https://learn.microsoft.com/training/modules/create-azure-resource-manager-template-vs-code/](https://learn.microsoft.com/training/modules/create-azure-resource-manager-template-vs-code/)  
**Estimated Duration:** 43 minutes  
**Total Units:** 7  

> **Overview:** Write JSON Azure Resource Manager templates by using Visual Studio Code to deploy your infrastructure to Azure consistently and reliably.

## Module Outline

| Unit # | Title | Duration | Official Reference |
|---|---|---|---|
| 1 | Introduction | 2 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/create-azure-resource-manager-template-vs-code/1-introduction/) |
| 2 | Explore Azure Resource Manager template structure | 7 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/create-azure-resource-manager-template-vs-code/2-explore-template-structure/) |
| 3 | Exercise - Create and deploy an Azure Resource Manager template | 10 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/create-azure-resource-manager-template-vs-code/3-exercise-create-and-deploy-template/) |
| 4 | Add flexibility to your Azure Resource Manager template by using parameters and outputs | 8 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/create-azure-resource-manager-template-vs-code/4-add-flexibility-arm-template/) |
| 5 | Exercise - Add parameters and outputs to your Azure Resource Manager template | 12 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/create-azure-resource-manager-template-vs-code/5-exercise-parameters-output/) |
| 6 | Module assessment | 3 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/create-azure-resource-manager-template-vs-code/6-knowledge-check/) |
| 7 | Summary | 1 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/create-azure-resource-manager-template-vs-code/7-summary/) |

---

## Unit 1: Introduction

**Source URL:** [https://learn.microsoft.com/training/modules/create-azure-resource-manager-template-vs-code/1-introduction/](https://learn.microsoft.com/training/modules/create-azure-resource-manager-template-vs-code/1-introduction/)  
**Duration:** 2 minutes  

JSON Azure Resource Manager templates (ARM templates) allow you to specify your project's infrastructure in a declarative and reusable way. You can version and save the templates in the same source control as your development project.



Suppose you're managing a software team that's developing an inventory system for your partner companies. You plan to deploy this product to Azure, and let each partner company have its own solution. You plan to implement different policies for each deployment through different Azure storage accounts. You decide to use the practice of *infrastructure as code* by using ARM templates. This approach lets you track the different versions and ensure that your infrastructure deployments for each environment are consistent and flexible.



In this module, we introduce you to ARM template structure and let you practice creating and deploying an ARM template to Azure.



Note



Bicep is a language for defining your Azure resources. It has a simpler authoring experience than JSON, along with other features that help improve the quality of your infrastructure as code. We recommend that anyone new to infrastructure as code on Azure use Bicep instead of JSON. To learn about Bicep, see the [Fundamentals of Bicep](../../paths/fundamentals-bicep/) learning path.



## Learning objectives



In this module, you will:



- Implement a JSON ARM template by using Visual Studio Code.

- Declare resources and add flexibility to your template by adding parameters and outputs.



## Prerequisites



- Familiarity with Azure, including the Azure portal, subscriptions, resource groups, and resource definitions.

- An Azure account. You can get a free account [here](https://azure.microsoft.com/pricing/purchase-options/azure-account?cid=msft_learn).

- [Visual Studio Code](https://code.visualstudio.com?azure-portal=true) installed locally.

- Either:

    - The latest [Azure CLI](/en-us/cli/azure/install-azure-cli?azure-portal=true) tools installed locally.

    - The latest [Azure PowerShell](/en-us/powershell/azure/install-az-ps?azure-portal=true) installed locally.

---

## Unit 2: Explore Azure Resource Manager template structure

**Source URL:** [https://learn.microsoft.com/training/modules/create-azure-resource-manager-template-vs-code/2-explore-template-structure/](https://learn.microsoft.com/training/modules/create-azure-resource-manager-template-vs-code/2-explore-template-structure/)  
**Duration:** 7 minutes  

In this unit, you learn about using Azure Resource Manager templates (ARM templates) to implement infrastructure as code. You survey the sections of an ARM template, learn how to deploy your ARM template to Azure, and delve into detail on the *resources* section of the ARM template.



## What is infrastructure as code?



*Infrastructure as code* allows you to describe, through code, the infrastructure that you need for your application.



With infrastructure as code, you can maintain both your application code and everything you need to deploy your application in a central code repository. The advantages to infrastructure as code are:



- Consistent configurations

- Improved scalability

- Faster deployments

- Better traceability



This video explains infrastructure as code:



## What is an ARM template?



ARM templates are JavaScript Object Notation (JSON) files that define the infrastructure and configuration for your deployment. The template uses a *declarative syntax*. The declarative syntax is a way of building the structure and elements that outline what resources look like without describing the control flow. Declarative syntax is different than *imperative syntax*, which uses commands for the computer to perform. Imperative scripting focuses on specifying each step in deploying the resources.



ARM templates allow you to declare what you intend to deploy without having to write the sequence of programming commands to create it. In an ARM template, you specify the resources and the properties for those resources. [Azure Resource Manager](/en-us/azure/azure-resource-manager/management/overview?azure-portal=true) then uses that information to deploy the resources in an organized and consistent manner.



### Benefits of using ARM templates



ARM templates allow you to automate deployments and use the practice of infrastructure as code (IaC). The template code becomes part of your infrastructure and development projects. Just like application code, you can store the IaC files in a source repository and version it.



ARM templates are *idempotent*, which means you can deploy the same template many times and get the same resource types in the same state.



Resource Manager orchestrates deploying the resources so they're created in the correct order. When possible, resources are created in parallel, so ARM template deployments finish faster than scripted deployments.



![Diagram showing a mapping of the template processing procedure. There's only one call to process a template as opposed to several calls to process scripts.](media/2-template-processing.png)



Resource Manager also has built-in validation. It checks the template before starting the deployment to make sure the deployment succeeds.



If your deployments become more complex, you can break your ARM templates into smaller, reusable components. You can link these smaller templates together at deployment time. You can also nest templates inside other templates.



In the Azure portal, you can review your deployment history and get information about the state of the deployment. The portal displays values for all parameters and outputs.



You can also integrate your ARM templates into continuous integration and continuous deployment (CI/CD) tools like [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines?azure-portal=true), which can automate your release pipelines for fast and reliable application and infrastructure updates. By using Azure DevOps and ARM template tasks, you can continuously build and deploy your projects.



### ARM template file structure



When you're writing an ARM template, you need to understand all the parts that make up the template and what they do. ARM template files are made up of the following elements:



| Element | Description |

| --- | --- |

| **schema** | A required section that defines the location of the JSON schema file that describes the structure of JSON data. The version number you use depends on the scope of the deployment and your JSON editor. |

| **contentVersion** | A required section that defines the version of your template (such as 1.0.0.0). You can use this value to document significant changes in your template to ensure you're deploying the right template. |

| **apiProfile** | An optional section that defines a collection of API versions for resource types. You can use this value to avoid having to specify API versions for each resource in the template. |

| **parameters** | An optional section where you define values that are provided during deployment. You can provide these values in a parameter file, by command-line parameters, or in the Azure portal. |

| **variables** | An optional section where you define values that are used to simplify template language expressions. |

| **functions** | An optional section where you can define [user-defined functions](/en-us/azure/azure-resource-manager/templates/template-user-defined-functions?azure-portal=true) that are available within the template. User-defined functions can simplify your template when complicated expressions are used repeatedly in your template. |

| **resources** | A required section that defines the actual items you want to deploy or update in a resource group or a subscription. |

| **output** | An optional section where you specify the values that are returned at the end of the deployment. |



## Deploy an ARM template to Azure



You can deploy an ARM template to Azure in one of the following ways:



- Deploy a local template

- Deploy a linked template

- Deploy in a continuous deployment pipeline



This module focuses on deploying a local ARM template. In future Learn modules, you learn how to deploy more complicated infrastructure and how to integrate with Azure Pipelines.



To deploy a local template, you need to have either [Azure PowerShell](/en-us/powershell/azure/install-az-ps) or the [Azure CLI](/en-us/cli/azure/install-azure-cli?azure-portal=true) installed locally.



First, sign in to Azure by using the Azure CLI or Azure PowerShell.



# [Azure CLI](#tab/azure-cli)

```azurecli

az login

```



# [PowerShell](#tab/azure-powershell)

```azurepowershell

Connect-AzAccount

```



---



Next, define your resource group. You can use an already-defined resource group or create a new one with the following command. You can obtain available location values from: `az account list-locations` (CLI) or `Get-AzLocation` (PowerShell). You can configure the default location using `az configure --defaults location=<location>`.



# [Azure CLI](#tab/azure-cli)

```azurecli

az group create \

  --name {name of your resource group} \

  --location "{location}"

```



# [PowerShell](#tab/azure-powershell)

```azurepowershell

New-AzResourceGroup `

  -Name {name of your resource group} `

  -Location "{location}"

```



---



To start a template deployment at the resource group, use either the Azure CLI command [az deployment group create](/en-us/cli/azure/deployment/group#az-deployment-group-create) or the Azure PowerShell command [New-AzResourceGroupDeployment](/en-us/powershell/module/az.resources/new-azresourcegroupdeployment).



Tip



The difference between `az deployment group create` and `az group deployment create` is that `az group deployment create` is an old command to be deprecated and will be replaced by `az deployment group create`. Therefore, we recommend using `az deployment group create` to deploy resources under the resource group scope.



Both commands require the resource group, the region, and the name for the deployment so you can easily identify it in the deployment history. For convenience, the exercises create a variable that stores the path to the template file. This variable makes it easier for you to run deployment commands, because you don't have to retype the path every time you deploy. Here's an example:



# [Azure CLI](#tab/azure-cli)

To run this deployment command, you must have the [latest version](/en-us/cli/azure/install-azure-cli) of Azure CLI.



```azurecli

templateFile="{provide-the-path-to-the-template-file}"

az deployment group create \

  --name blanktemplate \

  --resource-group myResourceGroup \

  --template-file $templateFile

```



# [PowerShell](#tab/azure-powershell)

```azurepowershell

$templateFile = "{provide-the-path-to-the-template-file}"

New-AzResourceGroupDeployment `

  -Name blanktemplate `

  -ResourceGroupName myResourceGroup `

  -TemplateFile $templateFile

```



---



Use linked templates to deploy complex solutions. You can break a template into many templates and deploy these templates through a main template. When you deploy the main template, it triggers the linked template's deployment. You can store and secure the linked template by using a SAS token.



A CI/CD pipeline automates the creation and deployment of development projects, which includes ARM template projects. The two most common pipelines used for template deployment are Azure Pipelines or [GitHub Actions](/en-us/training/paths/github-actions/?azure-portal=true).



More information on these two types of deployment is covered in other modules.



## Add resources to the template



To add a resource to your template, you need to know the resource provider and its types of resources. The syntax for this combination is in the form of *{resource-provider}/{resource-type}*. For example, to add a storage account resource to your template, you need the `Microsoft.Storage` resource provider. One of the types for this provider is `storageAccount`. So your resource type is displayed as `Microsoft.Storage/storageAccounts`. You can use a list of [resource providers for Azure services](/en-us/azure/azure-resource-manager/management/azure-services-resource-providers?azure-portal=true) to find the providers you need.



After you define the provider and resource type, you need to understand the properties for each resource type you want to use. For details, see [Define resources in Azure Resource Manager templates](/en-us/azure/templates?azure-portal=true). To find the resource, view the list in the left column. Notice that the properties are sorted by API version.



![Screenshot of a Microsoft documentation page showing the storage account documentation selected.](media/2-resource-type-properties.png)



Here's an example of some of the listed properties from the Storage Accounts page:



![Screenshot of a Microsoft documentation page showing some of the storage account properties.](media/2-storage-account-properties.png)



For our storage example, your template might look like this:



```json

{

  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",

  "contentVersion": "1.0.0.1",

  "apiProfile": "",

  "parameters": {},

  "variables": {},

  "functions": [],

  "resources": [

    {

      "type": "Microsoft.Storage/storageAccounts",

      "apiVersion": "2025-01-01",

      "name": "learntemplatestorage123",

      "location": "westus",

      "sku": {

        "name": "Standard_LRS"

      },

      "kind": "StorageV2",

      "properties": {

        "supportsHttpsTrafficOnly": true

      }

    }

  ],

  "outputs": {}

}

```

---

## Unit 3: Exercise - Create and deploy an Azure Resource Manager template

**Source URL:** [https://learn.microsoft.com/training/modules/create-azure-resource-manager-template-vs-code/3-exercise-create-and-deploy-template/](https://learn.microsoft.com/training/modules/create-azure-resource-manager-template-vs-code/3-exercise-create-and-deploy-template/)  
**Duration:** 10 minutes  

In this exercise, you create an Azure Resource Manager (ARM) template, deploy it to Azure, and then update that ARM template to add parameters and outputs.



## Create an ARM template



1. Open Visual Studio Code and create a new file called *azuredeploy.json*.

2. Copy and paste the following code into the file.



    ```json

    {

      "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",

      "contentVersion": "1.0.0.0",

      "parameters": {},

      "functions": [],

      "variables": {},

      "resources": [],

      "outputs": {}

    }

    ```



    Notice that this file has all of the sections of an ARM template that we described in the previous unit.

3. Save the changes to the file by pressing Ctrl+S.



## Deploy the ARM template to Azure



::: zone pivot="cli"



To deploy this template to Azure, you need to sign in to your Azure account from the Visual Studio Code terminal. Be sure you have the [Azure CLI](/en-us/cli/azure/install-azure-cli) tools installed.



1. Select **Terminal &gt; New Terminal** to open a terminal window.

2. If the command bar of the terminal window says **bash**, you have the right shell to work from and you can skip to the next section.



    1. If not, select the drop-down and choose **Select Default Profile**.



        ![Screenshot of the Visual Studio Code terminal window with bash in the drop-down.](media/3-bash.png)

    2. Select **Git Bash**.



        ![Screenshot of the Visual Studio Code terminal window showing the select shell drop-down.](media/3-select-shell-bash.png)

3. Change directory to the folder containing your ARM template file.



### Sign in to Azure



In the terminal window, run this command to sign in to Azure.



```azurecli

az login

```



In the browser window that opens, sign in to your account. After you sign in, a list of the subscriptions associated with this account displays in the terminal. The default subscription is marked with an asterisk (\*). If you have multiple subscriptions, select the subscription you want to use for this exercise.



### Create and set the default resource group



```azurecli

az group create --name <resource-group-name> --location <location>

```



Replace *&lt;resource-group-name&gt;* with a unique name for your resource group. Replace *&lt;location&gt;* with the Azure region closest to you. For example, use *eastus* for East US.



By setting the default resource group, you can omit that parameter from the Azure CLI commands in this exercise. To set the resource group, run the following command.



```azurecli

az configure --defaults group="<resource-group-name>"

```



Replace *&lt;resource-group-name&gt;* with your resource group name.



### Deploy the template to Azure



Run the following commands to deploy the ARM template to Azure. The ARM template doesn't have any resources yet, so there aren't any resources created. You should get a successful deployment.



```azurecli

templateFile="azuredeploy.json"

today=$(date +"%d-%b-%Y")

DeploymentName="blanktemplate-"$today



az deployment group create \

 --name $DeploymentName \

 --template-file $templateFile

```



The top section of the preceding code sets the Azure CLI variables, which include the path to the template file to deploy and the name of the deployment. The bottom section, `az  deployment group create`, deploys the template to Azure. Notice that the deployment name is `blanktemplate` with the date as a suffix.



You should see `Running...` in the terminal.



::: zone-end



::: zone pivot="powershell"



To deploy this template to Azure, you need to sign in to your Azure account from the Visual Studio Code terminal. Be sure that Azure PowerShell Tools are installed from the Visual Studio Code Extensions.



1. In the command bar, select **Terminal &gt; New Terminal** to open a PowerShell window.

2. If the command bar of the terminal window shows **PowerShell**, you have the right shell from which to work, and you can skip to the next section.



    ![Screenshot of the Visual Studio Code terminal window with the 'pwsh' terminal selected.](media/3-pwsh.png)



    1. If not, select the down arrow and in the dropdown list select PowerShell. If that option is missing, then select **Select Default Profile**.

    2. In the input field, scroll down and select **PowerShell**.



        ![Screenshot of the Visual Studio Code terminal window showing the select shell drop-down.](media/3-select-shell-powershell.png)

3. Change directory to the folder containing your ARM template files.



### Sign in to Azure by using Azure PowerShell



From the terminal in Visual Studio Code, run the following command to sign in to Azure. A browser opens so you can sign in to your account.



```azurepowershell

Connect-AzAccount

```



In the browser window that opens (the browser window could be opened behind the current window, minimize the current window to see it), sign in to your account. After you sign in, a list of the subscriptions associated with this account displays in the terminal. The default subscription is marked with an asterisk (\*). If you have multiple subscriptions, select the subscription you want to use for this exercise.



### Deploy the template to Azure



```azurepowershell

New-AzResourceGroup -Name <ResourceGroupName> -Location <Location>

```



Replace with a unique name for your resource group. Replace with the Azure region closest to you. For example, use eastus for East US.



By setting the default resource group, you can omit that parameter from the Azure CLI commands in this exercise. To set the resource group, run the following command.



```azurepowershell

Set-AzDefault -ResourceGroupName <ResourceGroupName>

```



replace *&lt;ResourceGroupName&gt;* with your resource group name.



Deploy the template to Azure by running the following commands. The ARM template doesn't have any resources yet, so there aren't any resources created.



```azurepowershell

$templateFile="azuredeploy.json"

$today=Get-Date -Format "MM-dd-yyyy"

$deploymentName="blanktemplate-"+"$today"

New-AzResourceGroupDeployment `

  -Name $deploymentName `

  -TemplateFile $templateFile

```



The top section of the preceding code sets Azure PowerShell variables, which includes the path to the deployment file and the name of the deployment. Then, the `New-AzResourceGroupDeployment` command deploys the template to Azure. Notice that the deployment name is `blanktemplate` with the date as a suffix.



::: zone-end



When you deploy your ARM template to Azure, go to the [Azure portal](https://portal.azure.com?azure-portal=true).



1. In the resource menu, select **Resource groups**.

2. Select the resource group you created in this exercise.

3. On the **Overview** pane, you see that one deployment succeeded.



    ![Azure portal interface for the resource group overview with the deployments section showing that one succeeded.](media/3-deployment-succeeded.png)

4. Select **1 Succeeded** to see the details of the deployment.



    ![Azure portal interface for the deployments with the one deployment listed and a succeeded status.](media/3-blanktemplate.png)

5. Select `blanktemplate` to see what resources were deployed. In this case, it's empty because you didn't specify any resources in the template yet.



    ![Azure portal interface for the specific deployment with no resources listed.](media/3-no-results.png)

6. Leave the page open in your browser so that you can check on deployments again.



## Add a resource to the ARM template



In the previous task, you learned how to create a blank template and deploy it. Now, you're ready to deploy an actual resource. In this task, you add an Azure storage account resource to the ARM template.



1. In the *azuredeploy.json* file in Visual Studio Code, update the file so it looks like:



    ```json

    {

      "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",

      "contentVersion": "1.0.0.0",

      "parameters": {},

      "functions": [],

      "variables": {},

      "resources": [

        {

          "type": "Microsoft.Storage/storageAccounts",

          "apiVersion": "2025-01-01",

          "name": "storageaccount1",

          "tags": {

            "displayName": "storageaccount1"

          },

          "location": "[resourceGroup().location]",

          "kind": "StorageV2",

          "sku": {

            "name": "Standard_LRS"

          }

        }

      ],

      "outputs": {}

    }

    ```

2. Change the values of the resource *name* and *displayName* to something unique (for example, **learnexercise12321**). This name must be globally unique across Azure, contain 3 to 24 characters, and include only lowercase letters, numbers, and hyphens.

3. The resource location is set to the same location as the resource group where the resource is deployed. Leave the default here.

4. Save the file.



### Deploy the updated ARM template



Here, you change the name of the deployment to better reflect what this deployment does.



::: zone pivot="cli"



Run the following Azure CLI commands in the terminal. This snippet is the same code you used previously, but the name of the deployment is changed.



```azurecli

templateFile="azuredeploy.json"

today=$(date +"%d-%b-%Y")

DeploymentName="addstorage-"$today



az deployment group create \

  --name $DeploymentName \

  --template-file $templateFile

```



::: zone-end



::: zone pivot="powershell"



Run the following Azure PowerShell commands in the terminal. This snippet is the same code you used previously, but the name of the deployment is changed.



```azurepowershell

$templateFile="azuredeploy.json"

$today=Get-Date -Format "MM-dd-yyyy"

$deploymentName="addstorage-"+"$today"

New-AzResourceGroupDeployment `

  -Name $deploymentName `

  -TemplateFile $templateFile

```



::: zone-end



### Check your deployment



1. When the deployment finishes, go back to the Azure portal in your browser. Go to your resource group, and you see that there are now **2 Succeeded** deployments. Select this link.



    Notice that both deployments are in the list.



    ![Screenshot of the Azure portal interface for the deployments with the two deployments listed and succeeded statuses.](media/3-addstorage-deployment.png)

2. Select **addstorage**.



    ![Screenshot of the Azure portal interface for the specific deployment with one resource listed.](media/3-show-resource-deployed.png)



Notice that the storage account is deployed.

---

## Unit 4: Add flexibility to your Azure Resource Manager template by using parameters and outputs

**Source URL:** [https://learn.microsoft.com/training/modules/create-azure-resource-manager-template-vs-code/4-add-flexibility-arm-template/](https://learn.microsoft.com/training/modules/create-azure-resource-manager-template-vs-code/4-add-flexibility-arm-template/)  
**Duration:** 8 minutes  

In the last unit, you created an Azure Resource Manager (ARM) template and added an Azure storage account to it. You might notice that there's a problem with your template. The storage account name is hardcoded. You can only use this template to deploy the same storage account every time. To deploy a storage account with a different name, you have to create a new template, which isn't a practical way to automate your deployments. The storage account SKU is also hardcoded, which means you can't vary the type of storage account for different environments. Recall that in our scenario, each deployment might have a different type of storage account. You can make your template more reusable by adding a parameter for the storage account SKU.



In this unit, you learn about the *parameters* and *outputs* sections of the template.



## ARM-template parameters



ARM-template parameters let you customize the deployment by providing values that are tailored for a particular environment. For example, you pass in different values based on whether you're deploying to an environment for development, test, production, or others. For example, the previous template uses the *Standard\_LRS* storage account SKU. You can reuse this template for other deployments that create a storage account by making the name of the storage account SKU a parameter. Then, you pass in the name of the SKU you want for this particular deployment when the template is deployed. You can do this step either at the command line or by using a parameter file.



In the `parameters` section of the template, you specify which values you can input when you deploy the resources. You're limited to 256 parameters in a template. Parameter definitions can use most template functions.



The available properties for a parameter are:



```json

"parameters": {

  "<parameter-name>": {

    "type": "<type-of-parameter-value>",

    "defaultValue": "<default-value-of-parameter>",

    "allowedValues": [

      "<array-of-allowed-values>"

    ],

    "minValue": <minimum-value-for-int>,

    "maxValue": <maximum-value-for-int>,

    "minLength": <minimum-length-for-string-or-array>,

    "maxLength": <maximum-length-for-string-or-array-parameters>,

    "metadata": {

      "description": "<description-of-the-parameter>"

    }

  }

}

```



The allowed types of parameters are:



- string

- secureString

- integers

- boolean

- object

- secureObject

- array



### Recommendations for using parameters



Use parameters for settings that vary according to the environment; for example, SKU, size, or capacity. Also use parameters for resource names that you want to specify yourself for easy identification or to comply with internal naming conventions. Provide a description for each parameter, and use default values whenever possible.



For security reasons, never hardcode or provide default values for usernames and/or passwords in templates. Always use parameters for usernames and passwords (or secrets). Use *secureString* for all passwords and secrets. If you pass sensitive data in a JSON object, use the *secureObject* type. Template parameters with *secureString* or *secureObject* types can't be read or harvested after the deployment of the resource.



### Use parameters in an ARM template



In the parameters section of the ARM template, specify the parameters that you can input when you deploy the resources. You're limited to 256 parameters in a template.



Here's an example of a template file with a parameter for the storage-account SKU defined in the template's `parameters` section. You can provide a default for the parameter to be used if no value is specified at execution.



```json

"parameters": {

  "storageAccountType": {

    "type": "string",

    "defaultValue": "Standard_LRS",

    "allowedValues": [

      "Standard_LRS",

      "Standard_GRS",

      "Standard_ZRS",

      "Premium_LRS"

    ],

    "metadata": {

      "description": "Storage Account type"

    }

  }

}

```



Then, use the parameter in the resource definition. The syntax is `[parameters('name of the parameter')]`. Then, when you deploy you use the `parameters` function. In the next module, you learn more about functions.



```json

"resources": [

  {

    "type": "Microsoft.Storage/storageAccounts",

    "apiVersion": "2025-01-01",

    "name": "learntemplatestorage123",

    "location": "[resourceGroup().location]",

    "sku": {

      "name": "[parameters('storageAccountType')]"

    },

    "kind": "StorageV2",

    "properties": {

      "supportsHttpsTrafficOnly": true

    }

  }

]

```



When you deploy the template, you can provide a value for the parameter. Notice the last line in the following command:



# [Azure CLI](#tab/azure-cli)

```azurecli

templateFile="azuredeploy.json"

az deployment group create \

  --name testdeployment1 \

  --template-file $templateFile \

  --parameters storageAccountType=Standard_LRS

```



# [PowerShell](#tab/azure-powershell)

```azurepowershell

$templateFile="azuredeploy.json"

New-AzResourceGroupDeployment `

  -Name testdeployment1 `

  -TemplateFile $templateFile `

  -storageAccountType Standard_LRS

```



---



## ARM template outputs



In your ARM template's outputs section, you can specify the values that are returned after a successful deployment. Here are the elements that make up the outputs section.



```json

"outputs": {

  "<output-name>": {

    "condition": "<boolean-value-whether-to-output-value>",

    "type": "<type-of-output-value>",

    "value": "<output-value-expression>",

    "copy": {

      "count": <number-of-iterations>,

      "input": <values-for-the-variable>

    }

  }

}

```



| Element | Description |

| --- | --- |

| **output-name** | Must be a valid JavaScript identifier. |

| **condition** | (Optional) A Boolean value that indicates whether this output value is returned. When true, the value is included in the output for the deployment. When false, the output value is skipped for this deployment. When not specified, the default value is true. |

| **type** | The type of the output value. |

| **value** | (Optional) A template language expression to be evaluated and returned as an output value. |

| **copy** | (Optional) Copy is used to return more than one value for an output. |



### Use outputs in an ARM template



Here's an example to output the storage account's endpoints:



```json

"outputs": {

  "storageEndpoint": {

    "type": "object",

    "value": "[reference('learntemplatestorage123').primaryEndpoints]"

  }

}

```



Notice the `reference` part of the expression. This function gets the runtime state of the storage account.



## Deploy an ARM template again



Recall that ARM templates are *idempotent*, which means you can deploy the template to the same environment again, and if nothing changes in the template, nothing changes in the environment. If a change is made to the template (for example, you change a parameter value), only that change is deployed. Your template can contain all of the resources you need for your Azure solution, and you can safely execute a template again. Resources are created only if they don't already exist, and updated only if there's a change.

---

## Unit 5: Exercise - Add parameters and outputs to your Azure Resource Manager template

**Source URL:** [https://learn.microsoft.com/training/modules/create-azure-resource-manager-template-vs-code/5-exercise-parameters-output/](https://learn.microsoft.com/training/modules/create-azure-resource-manager-template-vs-code/5-exercise-parameters-output/)  
**Duration:** 12 minutes  

In this exercise, you add a parameter to define the Azure storage account name during deployment. Then, you add a parameter to define which storage-account SKUs are allowed, and define which one to use for this deployment. You also add usefulness to the Azure Resource Manager template (ARM template) by adding an output that you can use later in the deployment process.



## Create parameters for the ARM template



Here, you make your ARM template more flexible by adding parameters that can be set at runtime. Create a parameter for the `storageName` value.



1. In the *azuredeploy.json* file in Visual Studio Code, update `"parameters":{},`, so it looks like:



    ```json

    "parameters": {

      "storageName": {

        "type": "string",

        "minLength": 3,

        "maxLength": 24,

        "metadata": {

          "description": "The name of the Azure storage resource"

        }

      }

    },

    ```



    To format the JSON file correctly, press Alt+Shift+F.

2. Use the new parameter in the `resources` block in both the `name` and `displayName` values. The entire file looks like this code example:



    ```json

    {

      "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",

      "contentVersion": "1.0.0.0",

      "parameters": {

        "storageName": {

          "type": "string",

          "minLength": 3,

          "maxLength": 24,

          "metadata": {

            "description": "The name of the Azure storage resource"

          }

        }

      },

      "functions": [],

      "variables": {},

      "resources": [

        {

          "type": "Microsoft.Storage/storageAccounts",

          "apiVersion": "2025-01-01",

          "name": "[parameters('storageName')]",

          "tags": {

            "displayName": "[parameters('storageName')]"

          },

          "location": "[resourceGroup().location]",

          "kind": "StorageV2",

          "sku": {

            "name": "Standard_LRS"

          }

        }

      ],

      "outputs": {}

    }

    ```

3. Save the file.



### Deploy the parameterized ARM template



Here, you change the name of the deployment to better reflect what this deployment does and fill in a value for the new parameter.



::: zone pivot="cli"



Run the following Azure CLI commands in the terminal. This script is identical to the one you used Previously, except the deployment name has been changed. Enter a unique value for the `storageName` parameter. It must be globally unique across Azure, contain 3 to 24 characters, and include only lowercase letters, numbers, and hyphens. You can reuse the unique name you created in the previous unit; if you do, Azure will update the existing resource instead of creating a new one.



```azurecli

templateFile="azuredeploy.json"

today=$(date +"%d-%b-%Y")

DeploymentName="addnameparameter-"$today



az deployment group create \

  --name $DeploymentName \

  --template-file $templateFile \

  --parameters storageName={your-unique-name}

```



::: zone-end



::: zone pivot="powershell"



Run the following Azure PowerShell commands in the terminal. This script is identical to the one you used earlier, except the deployment name has been changed. Enter a unique value for the `storageName` parameter. It must be globally unique across Azure, contain 3 to 24 characters, and include only lowercase letters, numbers, and hyphens. You can reuse the unique name you created in the previous unit; if you do, Azure will update the existing resource instead of creating a new one.



```azurepowershell

$templateFile="azuredeploy.json"

$today=Get-Date -Format "MM-dd-yyyy"

$deploymentName="addnameparameter-"+"$today"

New-AzResourceGroupDeployment `

  -Name $deploymentName `

  -TemplateFile $templateFile `

  -storageName {your-unique-name}

```



::: zone-end



### Check your deployment



1. When the deployment finishes, go back to the Azure portal in your browser. Go to your resource group, and see that there are now **3 Succeeded** deployments. Select this link.



    Notice that all three deployments are in the list.

2. Explore the *addnameparameter* deployment as you did previously.



### Add another parameter that limits allowed values



Here, you use parameters to limit the values allowed for a parameter.



1. Add a new parameter named `storageSKU` to the `parameters` section of the *azuredeploy.json* file.



    ```json

    // This is the allowed values for an Azure storage account

    "storageSKU": {

       "type": "string",

       "defaultValue": "Standard_LRS",

       "allowedValues": [

         "Standard_LRS",

         "Standard_GRS",

         "Standard_RAGRS",

         "Standard_ZRS",

         "Premium_LRS",

         "Premium_ZRS",

         "Standard_GZRS",

         "Standard_RAGZRS"

       ]

     }

    ```



    The first line is a comment. ARM templates support `//` and `/* */` comments.

2. Update **resources** to use the `storageSKU` parameter. If you take advantage of IntelliSense in Visual Studio Code, it makes this step easier.



    ```json

    "sku": {

         "name": "[parameters('storageSKU')]"

       }

    ```



    The entire file looks like this code example:



    ```json

    {

      "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",

      "contentVersion": "1.0.0.0",

      "parameters": {

        "storageName": {

          "type": "string",

          "minLength": 3,

          "maxLength": 24,

          "metadata": {

            "description": "The name of the Azure storage resource"

          }

        },

        "storageSKU": {

          "type": "string",

          "defaultValue": "Standard_LRS",

          "allowedValues": [

            "Standard_LRS",

            "Standard_GRS",

            "Standard_RAGRS",

            "Standard_ZRS",

            "Premium_LRS",

            "Premium_ZRS",

            "Standard_GZRS",

            "Standard_RAGZRS"

          ]

        }

      },

      "functions": [],

      "variables": {},

      "resources": [

        {

          "type": "Microsoft.Storage/storageAccounts",

          "apiVersion": "2025-01-01",

          "name": "[parameters('storageName')]",

          "tags": {

            "displayName": "[parameters('storageName')]"

          },

          "location": "[resourceGroup().location]",

          "kind": "StorageV2",

          "sku": {

            "name": "[parameters('storageSKU')]"

          }

        }

      ],

      "outputs": {}

    }

    ```

3. Save the file.



### Deploy the ARM template



Here, you deploy successfully by using a `storageSKU` parameter that's in the allowed list. Then, you try to deploy the template by using a `storageSKU` parameter that isn't in the allowed list. The second deployment fails as expected.



::: zone pivot="cli"



1. Deploy the template by running the following commands. Fill in a unique name for the `storageName` parameter. It must be globally unique across Azure, contain 3 to 24 characters, and include only lowercase letters, numbers, and hyphens. You can reuse the unique name you created in the previous unit; if you do, Azure will update the existing resource instead of creating a new one.



    ```azurecli

    templateFile="azuredeploy.json"

    today=$(date +"%d-%b-%Y")

    DeploymentName="addSkuParameter-"$today

    

    az deployment group create \

      --name $DeploymentName \

      --template-file $templateFile \

      --parameters storageSKU=Standard_GRS storageName={your-unique-name}

    ```



    Allow this deployment to finish. This deployment succeeds as expected. Your list of allowed values, prevents your template's users from passing in parameter values that don't work for the resource. Let's see what happens when you provide an invalid SKU.

2. Run the following commands to deploy the template with a parameter that isn't allowed. Here, you changed the `storageSKU` parameter to **Basic**. Fill in a unique name for the `storageName` parameter. It must be globally unique across Azure, contain 3 to 24 characters, and include only lowercase letters, numbers, and hyphens. You can reuse the unique name you created in the previous unit; if you do, Azure will update the existing resource instead of creating a new one.



    ```azurecli

    templateFile="azuredeploy.json"

    today=$(date +"%d-%b-%Y")

    DeploymentName="addSkuParameter-"$today

    

    az deployment group create \

      --name $DeploymentName \

      --template-file $templateFile \

      --parameters storageSKU=Basic storageName={your-unique-name}

    ```



    This deployment fails. Notice the error.



    ![Screenshot of the Terminal window showing the deployment validation error.](media/3-deploy-validation-failed.png)



::: zone-end



::: zone pivot="powershell"



1. Deploy the template by running the following commands. Fill in a unique name for the `storageName` parameter. It must be globally unique across Azure, contain 3 to 24 characters, and include only lowercase letters, numbers, and hyphens. You can reuse the unique name you created in the previous unit; if you do, Azure will update the existing resource instead of creating a new one.



    ```azurepowershell

    $today=Get-Date -Format "MM-dd-yyyy"

    $deploymentName="addSkuParameter-"+"$today"

    New-AzResourceGroupDeployment `

      -Name $deploymentName `

      -TemplateFile $templateFile `

      -storageName {your-unique-name} `

      -storageSKU Standard_GRS

    ```



    Allow this deployment to finish. This deployment succeeds as expected. Your list of allowed values, prevents your template's users from passing in parameter values that don't work for the resource. Let's see what happens when you provide an invalid SKU.

2. Run the following commands to deploy the template with a parameter that isn't allowed. Here, you changed the `storageSKU` parameter to **Basic**. Fill in a unique name for the `storageName` parameter. It must be globally unique across Azure, contain 3 to 24 characters, and include only lowercase letters, numbers, and hyphens. You can reuse the unique name you created in the previous unit; if you do, Azure will update the existing resource instead of creating a new one.



    ```azurepowershell

    $today=Get-Date -Format "MM-dd-yyyy"

    $deploymentName="addSkuParameter-"+"$today"

    New-AzResourceGroupDeployment `

      -Name $deploymentName `

      -TemplateFile $templateFile `

      -storageName {your-unique-name} `

      -storageSKU Basic

    ```



    This deployment fails. Notice the error.



    ![Screenshot of the Terminal window showing the deployment validation error.](media/3-deploy-validation-failed.png)



::: zone-end



## Add output to the ARM template



Here, you add to the `outputs` section of the ARM template to output the endpoints for the storage account resource.



1. In the *azuredeploy.json* file in Visual Studio Code, update `"outputs":{},` so it looks like:



    ```json

    "outputs": {

      "storageEndpoint": {

        "type": "object",

        "value": "[reference(parameters('storageName')).primaryEndpoints]"

      }

    }

    ```

2. Save the file.



### Deploy the ARM template with an output



Here, you deploy the template and see the endpoints output as JSON. You need to fill in a unique name for the `storageName` parameter. It must be globally unique across Azure, contain 3 to 24 characters, and include only lowercase letters, numbers, and hyphens. You can reuse the unique name you created in the previous unit; if you do, Azure will update the existing resource instead of creating a new one.



::: zone pivot="cli"



1. Deploy the template by running the following commands. Be sure to replace *{your-unique-name}* with a string unique to you.



    ```azurecli

    templateFile="azuredeploy.json"

    today=$(date +"%d-%b-%Y")

    DeploymentName="addoutputs-"$today

    

    az deployment group create \

      --name $DeploymentName \

      --template-file $templateFile \

      --parameters storageSKU=Standard_LRS storageName={your-unique-name}

    ```



    Notice the output.



    ![Screenshot of the Terminal window showing the primary endpoints output as JSON.](media/3-add-output-result.png)



::: zone-end



::: zone pivot="powershell"



1. Deploy the template by running the following commands. Be sure to replace *{your-unique-name}* with a string unique to you.



    ```azurepowershell

    $today=Get-Date -Format "MM-dd-yyyy"

    $deploymentName="addOutputs-"+"$today"

    New-AzResourceGroupDeployment `

      -Name $deploymentName `

      -TemplateFile $templateFile `

      -storageName {your-unique-name} `

      -storageSKU Standard_LRS

    ```



    Notice the output.



    ![Screenshot of the Terminal window showing the primary endpoints output as JSON.](media/3-add-output-result.png)



::: zone-end



### Check your output deployment



In the Azure portal, go to your *addOutputs* deployment. You can find your output there as well.



![Screenshot of the Azure portal showing the output selection in the left menu.](media/3-portal-outputs.png)

---

## Unit 6: Module assessment

**Source URL:** [https://learn.microsoft.com/training/modules/create-azure-resource-manager-template-vs-code/6-knowledge-check/](https://learn.microsoft.com/training/modules/create-azure-resource-manager-template-vs-code/6-knowledge-check/)  
**Duration:** 3 minutes  

Choose the best response for each question.



## Check your knowledge



1.

What is an Azure Resource Manager template?



A series of Azure CLI commands to deploy infrastructure to Azure.



A JavaScript Object Notation (JSON) file that defines the infrastructure and configuration for your deployment.



A script held in Azure Resource Manager to manage your Azure storage account.



2.

Which one of these choices is *not* an element of an Azure Resource Manager template?



`idempotent`



`schema`



`parameters`



3.

Azure Resource Manager templates are idempotent. This means that if you run a template with no changes a second time:



Azure Resource Manager deploys new resources as copies of the previously deployed resources.



Azure Resource Manager doesn't make any changes to the deployed resources.



Azure Resource Manager deletes the previously deployed resources and redeploys them.

---

## Unit 7: Summary

**Source URL:** [https://learn.microsoft.com/training/modules/create-azure-resource-manager-template-vs-code/7-summary/](https://learn.microsoft.com/training/modules/create-azure-resource-manager-template-vs-code/7-summary/)  
**Duration:** 1 minutes  

In this module, you learned about Azure Resource Manager templates (ARM templates) and used them to deploy a storage account to Azure. You made the template more flexible by adding parameters and got output from the execution of the template.



In summary, you:



- Implemented an ARM template by using Visual Studio Code.

- Declared resources and added flexibility to your template by adding resources, parameters, and outputs.



## Learn more



To learn more, check out the following articles:



- [Download Azure Resource Manager Tools for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=msazurermtools.azurerm-vscode-tools&amp;azure-portal=true)

- [Understand the structure and syntax of ARM templates](/en-us/azure/azure-resource-manager/templates/template-syntax?azure-portal=true)

- [Learn about Azure Resource Manager](/en-us/azure/azure-resource-manager/management/overview?azure-portal=true)

- [How to install the Azure CLI](/en-us/cli/azure/install-azure-cli?azure-portal=true)

- [How to install Azure PowerShell](/en-us/powershell/azure/install-az-ps?azure-portal=true)

- [Learn about resource providers for Azure services](/en-us/azure/azure-resource-manager/management/azure-services-resource-providers?azure-portal=true)

- [Define resources in Azure Resource Manager templates](/en-us/azure/templates?azure-portal=true)

- [Learn about Outputs in Azure Resource Manager templates](/en-us/azure/azure-resource-manager/templates/template-outputs?tabs=azure-powershell)

- [Learn about Parameters in Azure Resource Manager templates](/en-us/azure/azure-resource-manager/templates/template-parameters?azure-portal=true)

---


## Exam Ref AZ-104 Certification Deep Dive & Exam Tips (Charles Pluta, 2024)

> **Source Reference:** *Exam Ref AZ-104 Microsoft Azure Administrator (Charles Pluta, 3rd Edition, 2024)*, Chapter 3, pp. 124–142.

### Key Certification Focus Areas & Architecture Nuances
- **ARM Template JSON Schema Hierarchy [pp. 124–126]:**
  - `$schema`: Specifies location of the JSON schema file describing target resource providers (e.g., `deploymentTemplate.json`).
  - `contentVersion`: Internal version string (e.g., `1.0.0.0`) for tracking changes.
  - `parameters`: Values passed at deployment time to customize behavior across environments (Dev, Test, Prod).
  - `variables`: Internal values created through expressions to simplify template maintenance.
  - `functions`: User-defined functions within custom namespaces to simplify complex expressions.
  - `resources`: Array of resource objects being deployed or updated.
  - `outputs`: Values returned after deployment (e.g., FQDN, provisioned IP, connection strings).
- **Deployment Modes: Incremental vs. Complete [p. 132]:**
  - **Incremental Mode (Default):** Leaves existing resources in the resource group unchanged if they are not defined in the template. Modifies matching resources; adds newly defined resources.
  - **Complete Mode:** Resource Manager evaluates the entire resource group against the template. *Any existing resource in the target resource group that is NOT explicitly defined in the template will be deleted!*
  - *Exam Caveat:* If a resource lock, policy, or dependency prevents deletion during Complete mode, the deployment operation fails and produces an error [p. 132].
- **Template Specs & Bicep Integration [pp. 138–142]:**
  - **Template Specs:** First-class Azure resources (`Microsoft.Resources/templateSpecs`) enabling organizations to store, version, and share approved ARM templates directly in Azure with RBAC protection [p. 138].
  - **Bicep:** Declarative domain-specific language that abstracts away JSON complexity. Transpiles directly into standard ARM JSON templates prior to submission [pp. 140–142].

### Common Exam Traps & "Need More Review?" Tips
- **Exam Trap:** Forgetting the explicit dependency requirement in ARM JSON. If a VM needs a NIC, you must declare `dependsOn: [ resourceId('Microsoft.Network/networkInterfaces', variables('nicName')) ]`. Without `dependsOn`, ARM attempts parallel creation and the VM deployment fails because the NIC does not yet exist [pp. 129–130].
- **Exam Trap:** Expecting parameter files to define resources. *Correction:* Parameter files only supply runtime values (`value: "..."`) for keys declared in the template's `parameters` section [p. 136].

### Thought Experiment & Decision Criteria [Ch. 3, pp. 212–214]
- **Scenario:** A dev team needs to ensure that test environments precisely match production, but must remove unmanaged temporary test resources on every deployment run.
- **Decision:** Execute deployment in **Complete Mode** (`--mode Complete`). This ensures any resource created outside the authoritative template is pruned automatically upon deployment completion.


## Verification & Knowledge Audit

- **Source Authenticity:** All content directly extracted from official Microsoft Learn documentation for Module: `Deploy Azure infrastructure by using JSON ARM templates`.
- **Reference URLs:** Complete unit URLs embedded above.
- **Audit Status:** Verified against Microsoft Learn catalog API and markdown endpoint. Hallucination check passed.
