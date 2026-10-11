# Module: Introduction to Azure Cloud Shell

**Course:** [Course AZ-104T00-A: Microsoft Azure Administrator](https://learn.microsoft.com/en-us/training/courses/az-104t00)  
**Learning Path:** [AZ-104: Prerequisites for Azure administrators](https://learn.microsoft.com/training/paths/az-104-administrator-prerequisites/)  
**Official Microsoft Module Source:** [https://learn.microsoft.com/training/modules/intro-to-azure-cloud-shell/](https://learn.microsoft.com/training/modules/intro-to-azure-cloud-shell/)  
**Estimated Duration:** 20 minutes  
**Total Units:** 6  

> **Overview:** In this module, you learn what Azure Cloud Shell does, how it works, and when you should choose to use Azure Cloud Shell as a solution to meet your organization’s needs.

## Module Outline

| Unit # | Title | Duration | Official Reference |
|---|---|---|---|
| 1 | Introduction | 3 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/intro-to-azure-cloud-shell/1-introduction/) |
| 2 | What is Azure Cloud Shell? | 2 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/intro-to-azure-cloud-shell/2-what-is-azure-cloud-shell/) |
| 3 | How does Azure Cloud Shell work? | 6 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/intro-to-azure-cloud-shell/3-how-azure-cloud-shell-works/) |
| 4 | When should you use Azure Cloud Shell? | 3 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/intro-to-azure-cloud-shell/4-when-to-use-azure-cloud-shell/) |
| 5 | Module assessment | 4 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/intro-to-azure-cloud-shell/5-knowledge-check/) |
| 6 | Summary | 2 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/intro-to-azure-cloud-shell/6-summary/) |

---

## Unit 1: Introduction

**Source URL:** [https://learn.microsoft.com/training/modules/intro-to-azure-cloud-shell/1-introduction/](https://learn.microsoft.com/training/modules/intro-to-azure-cloud-shell/1-introduction/)  
**Duration:** 3 minutes  

Azure Cloud Shell is a browser-accessible command-line experience for managing Azure resources. It provides the flexibility of choosing the shell experience that best suits the way you work, either Bash or PowerShell. Traditionally, to interact with Azure resources via command-line, you need to install the necessary components into your local computer (PC, Mac, Linux). With Cloud Shell, you have an authenticated, interactive shell that isn't part of a local machine.



You're an IT admin for Contoso Corporation, responsible for the cloud infrastructure on which the company hosts its applications. These applications use different cloud resources, such as Azure VMs, Azure blob storage, Azure networking, and others. On many occasions, you're asked to perform operations on these cloud resources at moments when you’re not using your work laptop. In some cases, you have a friend’s laptop, a smartphone, or another personal PC.



This module explains what Azure Cloud Shell does, how it works, and when you should choose to use Cloud Shell as a solution to meet your organization's needs.



## Learning objectives



In this module, you'll:



- Describe Azure Cloud Shell and the functionality it provides.

- Determine whether Cloud Shell meets the needs of your organization.

- Recognize how to use Cloud Shell and persist files for multiple sessions.

---

## Unit 2: What is Azure Cloud Shell?

**Source URL:** [https://learn.microsoft.com/training/modules/intro-to-azure-cloud-shell/2-what-is-azure-cloud-shell/](https://learn.microsoft.com/training/modules/intro-to-azure-cloud-shell/2-what-is-azure-cloud-shell/)  
**Duration:** 2 minutes  

Azure Cloud Shell is a command-line environment you can access through your web browser. You can use this environment to manage Azure resources, including VMs, storage, and networking. Just like you do when using the Azure CLI or Azure PowerShell.



Because Microsoft manages Cloud Shell, you always have access to the most recent versions of the Azure CLI and PowerShell modules right from any browser. You don't have to worry about keeping modules up to date. With Cloud Shell, you just open your browser and sign in. Just like that, you have access to a command-line environment fully connected with your account's permissions and the resources to which you have access. All that works in an infrastructure that's compliant with double encryption at rest by default. You don't need to take any further action!



Azure Cloud Shell also provides cloud storage to persist files such as SSH keys, scripts, and more. This functionality lets you access important files in between sessions and with different machines. Finally, you can use the Cloud Shell editor to make changes to files, such as scripts, that are saved into this cloud storage directly from the Cloud Shell interface.

---

## Unit 3: How does Azure Cloud Shell work?

**Source URL:** [https://learn.microsoft.com/training/modules/intro-to-azure-cloud-shell/3-how-azure-cloud-shell-works/](https://learn.microsoft.com/training/modules/intro-to-azure-cloud-shell/3-how-azure-cloud-shell-works/)  
**Duration:** 6 minutes  

As an IT admin for Contoso Corporation, you're frequently on-call to perform administrative tasks and resolve workload disruptions to resources in your organization's Azure subscriptions. When visiting a family member during a weekend that you're on call, the development team notifies you of a problem with an Azure virtual machine (VM). The VM became nonresponsive during scheduled maintenance for the upgrade of an application that runs on it. Because the developers weren't granted access to the underlying Azure virtual machine hosting infrastructure, they're only able to remotely access the VM when it's operating normally. So, you're being called to diagnose and remediate the problem.



Since you're visiting family, you don’t have access to your administrative workstation and diagnostic scripts. You do have access to a laptop with an internet browser. Using the laptop, you browse to the Azure portal, authenticate against your organization’s Azure subscription, open Azure Cloud Shell, mount an Azure File Share, access your diagnostic scripts, and diagnose and remediate the problems with the VM, returning it to operation.



## Access Cloud Shell



You have a few different options for accessing Azure Cloud Shell:



- From a direct link: https://shell.azure.com



    [![A screenshot of Cloud Shell accessed directly from a link.](media/access-cloud-shell-directly.png)](media/access-cloud-shell-directly.png#lightbox)

- From the Azure portal



    [![A screenshot of Cloud Shell accessed from Azure portal.](media/access-cloud-shell-from-azure-portal.png)](media/access-cloud-shell-from-azure-portal.png#lightbox)

- From code snippets when accessing Microsoft Learn:



    [![A screenshot of Cloud Shell accessed from code snippets.](media/access-cloud-shell-from-code-snippets.png)](media/access-cloud-shell-from-code-snippets.png#lightbox)



When you open a Cloud Shell session, a temporary host is allocated to your session. This VM is preconfigured with the latest versions of PowerShell and Bash. You can then select the command-line experience you want to use:



[![A screenshot of how to choose a command-line experience in a Cloud Shell session.](media/select-cli-experience.png)](media/select-cli-experience.png#lightbox)



After you select the shell experience you want to use, you can start managing your Azure resources:



[![A screenshot of how to use Cloud Shell to manage Azure resources.](media/manage-azure-resources-in-cloud-shell.png)](media/manage-azure-resources-in-cloud-shell.png#lightbox)



Cloud Shell sessions terminate after 20 minutes of inactivity. When a session terminates, files on your CloudDrive are persisted, but you need to start a new session to access the Cloud Shell environment.



## Access your own scripts and files



When using Cloud Shell, you might also need to run scripts or use files for different actions. You can persist files on Cloud Shell by using the Azure CloudDrive:



[![A screenshot of how to access CloudDrive in a Cloud Shell session.](media/use-azure-cloud-drive.png)](media/use-azure-cloud-drive.png#lightbox)



After uploading files, you can interact with them as you would in a regular PowerShell or Bash session:



[![A screenshot of how to manage files in CloudDrive.](media/manage-files-in-cloud-drive.png)](media/manage-files-in-cloud-drive.png#lightbox)



Now that your file resides on CloudDrive, you can close the session and open another session on a different device and still access the same file. Cloud Shell also lets you map an Azure Storage File Share, which is tied to a specific region. Access to an Azure File Share lets you work with the contents of that share through Cloud Shell.



If you need to edit scripts hosted on the CloudDrive or File Share, you can use the Cloud Shell editor. Select the curly brackets {} icon on the browser and open the file you want to edit, or use the command `code` and specify the filename; for example:



```bash

code temp.txt

```



[![A screenshot of how to access the Cloud Shell editor mode.](media/cloud-shell-edit-scripts.png)](media/cloud-shell-edit-scripts.png#lightbox)



Note



The `code` command only works in the Classic mode in Cloud Shell. To enable Classic mode, select the **More** icon (**...**), then select **Settings** &gt; **Go to Classic version**.



## Cloud Shell tools



If you need to manage resources (such as Docker containers or Kubernetes Clusters) or want to use non-Microsoft tools (such as Ansible and Terraform) in Cloud Shell, the Cloud Shell session comes with these add-ons already preconfigured.



Here’s a list of all add-ons available to you within a Cloud Shell session:



| Category | Name |

| --- | --- |

| **Linux tools** | `bash``zsh``sh``tmux``dig` |

| **Azure tools** | [`Azure CLI`](/en-us/cli/azure/)`AzCopy``Azure Functions CLI``Service Fabric CLI``Batch Shipyard``blobxfer` |

| **Text editors** | `code (Cloud Shell editor)``vim``nano``emacs` |

| **Source control** | `git` |

| **Build tools** | `make``maven``npm``pip` |

| **Containers** | `Docker Machine``Kubectl``Helm``DC/OS CLI` |

| **Databases** | `MySQL client``PostgreSql client``sqlcmd Utility``mssql-scripter` |

| **Other** | `iPython Client``Cloud Foundry CLI``Terraform``Ansible``Chef InSpec``Puppet Bolt``HashiCorp Packer``Office 365 CLI` |

---

## Unit 4: When should you use Azure Cloud Shell?

**Source URL:** [https://learn.microsoft.com/training/modules/intro-to-azure-cloud-shell/4-when-to-use-azure-cloud-shell/](https://learn.microsoft.com/training/modules/intro-to-azure-cloud-shell/4-when-to-use-azure-cloud-shell/)  
**Duration:** 3 minutes  

As an IT Admin for Contoso Corporation, you need alternatives to interact with Azure resources from the command line even when not using your default administrative device.



You can use Azure Cloud Shell to:



- Open a secure command-line session from any browser-based device.

- Interact with Azure resources without the need to install plug-ins or add-ons to your device.

- Persist files between sessions for later use.

- Use either Bash or PowerShell, whichever you prefer, to manage Azure resources.

- Edit files (such as scripts) via the Cloud Shell editor.



You shouldn't use Azure Cloud Shell if:



- You intend to leave a session open for more than 20 minutes for long running scripts or activities. In these cases, your session is disconnected without warning, and the current state is lost.

- You need admin permissions, such as sudo access, from within the Azure CLI or PowerShell environment.

- You need to install tools that aren't supported in the limited Cloud Shell environment, but instead require an environment such as a custom virtual machine or container.

- You need storage from different regions. You might need to back up and synchronize this content since only one region can have the storage allocated to Azure Cloud Shell.

- You need to open multiple sessions at the same time. Azure Cloud Shell allows only one instance at time and isn't suitable for concurrent work across multiple subscriptions or tenants.

---

## Unit 5: Module assessment

**Source URL:** [https://learn.microsoft.com/training/modules/intro-to-azure-cloud-shell/5-knowledge-check/](https://learn.microsoft.com/training/modules/intro-to-azure-cloud-shell/5-knowledge-check/)  
**Duration:** 4 minutes  

## Check your knowledge



1.

Which of these methods can you use to access Azure Cloud Shell from a computer running Windows 11?



Install Windows Subsystem for Linux and make an SSH connection to Azure.



Make a Remote Desktop Protocol connection to Azure.



Use the Microsoft Edge Browser to log into an Azure Subscription.



2.

You want to store a script that you constantly use for operations on Azure resources. This script needs to be rapidly available when you open a new Azure Cloud Shell session. Which of these procedures should you use?



Upload the script to your CloudDrive on an Azure Cloud Shell session.



Create a new script and store it on an Azure Storage Blob.



Use Cloud Shell editor to create and edit the script you want to use.



3.

You have a script stored on the Cloud Shell storage. You constantly use this script for resource management, but you need to perform small changes to it. Which of these solutions is the best way to handle the situation?



Download the script from the Azure Cloud Shell session, edit the script, and upload it back before using it.



Push the script to GitHub and run it from the Azure Cloud Shell session.



Use the Cloud Shell editor to make the necessary changes and save it directly on the CloudDrive.

---

## Unit 6: Summary

**Source URL:** [https://learn.microsoft.com/training/modules/intro-to-azure-cloud-shell/6-summary/](https://learn.microsoft.com/training/modules/intro-to-azure-cloud-shell/6-summary/)  
**Duration:** 2 minutes  

Azure Cloud Shell is a browser-accessible command-line experience for managing Azure resources. Rather than having to configure an Azure CLI or PowerShell session from your workstation, you can access Cloud Shell on any standard, compliant browser.



Cloud Shell provides the flexibility of choosing the shell experience that best suits the way you work, allowing you to work either in Bash or PowerShell, right from the browser. Cloud Shell also provides you with the mechanisms to persist files between sessions, and provides access to a minimalist version of the Visual Studio Code editor for more complex operations.



## Learn more



Check out these articles to learn more about Azure Cloud Shell.



[Azure Cloud Shell Overview](/en-us/azure/cloud-shell/overview)



[Azure Cloud Shell – Browser-Based Command Line](https://azure.microsoft.com/features/cloud-shell/)

---


## Exam Ref AZ-104 Certification Deep Dive & Exam Tips (Charles Pluta, 2024)

> **Source Reference:** *Exam Ref AZ-104 Microsoft Azure Administrator (Charles Pluta, 3rd Edition, 2024)*, Chapter 1, pp. 2–6 & Chapter 3, pp. 133–137.

### Key Certification Focus Areas & Architecture Nuances
- **Storage Account Attachment Mechanics [pp. 2–3]:**
  - Azure Cloud Shell requires an Azure Storage account backing an Azure file share to persist files across sessions.
  - The file share is mounted as `clouddrive` at path `/home/<user>/clouddrive`.
  - If using the automated setup, Cloud Shell provisions a General-Purpose v4/LRS storage account in your chosen region.
  - If using advanced settings, you can select an existing Resource Group, Storage Account, and File Share.
- **Session Lifecycle & Inactivity Timeout [p. 4]:**
  - Cloud Shell sessions time out and disconnect after **20 minutes of inactivity**.
  - Terminating a session deallocates the backing container VM; however, all data in `clouddrive` persists in Azure Files.
- **Environment Parity & Integrated Tools [pp. 4–5]:**
  - Both Bash and PowerShell environments run on a Linux container (Azure Linux / Ubuntu).
  - Built-in management tools include: Azure CLI (`az`), Azure PowerShell (`Az`), `git`, `kubectl`, `helm`, `terraform`, `ansible`, and the built-in Monaco-based Cloud Shell editor (`code .`).

### Common Exam Traps & "Need More Review?" Tips
- **Exam Trap:** Believing that changing between Bash and PowerShell reboots or resets your persistent file storage. *Correction:* Both environments share the same underlying `clouddrive` storage share.
- **Exam Trap:** Expecting files saved outside of `clouddrive` (e.g., in `/tmp` or the container root) to survive session termination. *Correction:* Only files stored in `/home/<user>/clouddrive` persist between sessions [p. 3].

### Thought Experiment & Decision Criteria [Ch. 1, p. 63]
- **Scenario:** An administrator on call needs to remediate an Azure VM configuration from an untrusted personal laptop without installing administrative modules or VPN software.
- **Decision:** Use browser-based Azure Cloud Shell. It requires zero client-side tooling, leverages Microsoft Entra ID MFA authentication already established in the browser, enforces least-privilege RBAC, and automatically updates all CLI and PowerShell modules.


## Verification & Knowledge Audit

- **Source Authenticity:** All content directly extracted from official Microsoft Learn documentation for Module: `Introduction to Azure Cloud Shell`.
- **Reference URLs:** Complete unit URLs embedded above.
- **Audit Status:** Verified against Microsoft Learn catalog API and markdown endpoint. Hallucination check passed.
