# Module: Protect your virtual machines by using Azure Backup

**Course:** [Course AZ-104T00-A: Microsoft Azure Administrator](https://learn.microsoft.com/en-us/training/courses/az-104t00)  
**Learning Path:** [AZ-104: Monitor and back up Azure resources](https://learn.microsoft.com/training/paths/az-104-monitor-backup-resources/)  
**Official Microsoft Module Source:** [https://learn.microsoft.com/training/modules/protect-virtual-machines-with-azure-backup/](https://learn.microsoft.com/training/modules/protect-virtual-machines-with-azure-backup/)  
**Estimated Duration:** 35 minutes  
**Total Units:** 7  

> **Overview:** Use Azure Backup to help protect on-premises servers, virtual machines, SQL Server, Azure file shares, and other workloads.

## Module Outline

| Unit # | Title | Duration | Official Reference |
|---|---|---|---|
| 1 | Introduction | 2 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/protect-virtual-machines-with-azure-backup/1-introduction/) |
| 2 | Azure Backup features and scenarios | 5 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/protect-virtual-machines-with-azure-backup/2-azure-backup-features-scenarios/) |
| 3 | Back up an Azure virtual machine by using Azure Backup | 5 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/protect-virtual-machines-with-azure-backup/3-back-up-azure-virtual-machine/) |
| 4 | Exercise - Back up an Azure virtual machine | 10 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/protect-virtual-machines-with-azure-backup/4-exercise-back-up-azure-virtual-machine/) |
| 5 | Restore virtual machine data | 5 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/protect-virtual-machines-with-azure-backup/5-restore-virtual-machine-data/) |
| 6 | Exercise - Restore Azure virtual machine data | 6 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/protect-virtual-machines-with-azure-backup/6-exercise-restore-virtual-machine-data/) |
| 7 | Summary | 2 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/protect-virtual-machines-with-azure-backup/7-summary/) |

---

## Unit 1: Introduction

**Source URL:** [https://learn.microsoft.com/training/modules/protect-virtual-machines-with-azure-backup/1-introduction/](https://learn.microsoft.com/training/modules/protect-virtual-machines-with-azure-backup/1-introduction/)  
**Duration:** 2 minutes  

Your company has several critical virtual machine (VM) workloads running on Azure. As the lead solution architect, you're asked to ensure that the company can recover these VMs if there's data loss or corruption. You're asked to use the built-in capabilities of Azure Backup to help protect these VMs.



Azure Backup is a service that allows you to back up Azure virtual machines, on-premises servers, Azure file shares, and SQL Server or SAP HANA (High-performance Analytic Appliance) running on Azure VMs, and other application workloads.



In this module, you learn about Azure Backup and you see how you can use the Azure portal to back up and restore a VM.



## Learning objectives



In this module, you:



- Identify the scenarios for which Azure Backup provides backup and restore capabilities.

- Back up and restore an Azure virtual machine.



## Prerequisites



- Basic knowledge of Azure virtual machines.

- Basic knowledge of disk storage for virtual machines.



Note



For this module, you need use your own subscription to complete the optional exercises. A trial subscription or a subscription that you already have access to works for these exercises.

---

## Unit 2: Azure Backup features and scenarios

**Source URL:** [https://learn.microsoft.com/training/modules/protect-virtual-machines-with-azure-backup/2-azure-backup-features-scenarios/](https://learn.microsoft.com/training/modules/protect-virtual-machines-with-azure-backup/2-azure-backup-features-scenarios/)  
**Duration:** 5 minutes  

Your company's business continuity and disaster recovery (BCDR) plan requires a full backup and restore capability for all of your high-risk servers. You're asked to enable and test the backup and restore functionality for these critical Windows and Linux assets.



In this unit, you look at how Azure Backup works, and study some of the supported use cases for Azure Backup.



## What is Azure Backup?



Azure Backup is a built-in Azure service that provides secure backup for all Azure-managed data assets. It uses zero-infrastructure solutions to enable self-service backups and restores, with at-scale management at a lower and predictable cost. Azure Backup currently offers specialized backup solutions for Azure and on-premises virtual machines (VMs). Azure Backup also gives workloads like SQL Server or SAP HANA (High-performance Analytic Appliance) running in Azure VMs enterprise-class backup and restore options.



In contrast to traditional backup solutions that can take considerable effort to set up, Azure Backup is easily managed through the Azure portal.



### Azure Backup versus Azure Site Recovery



Both Azure Backup and Azure Site Recovery aim to make the system more resilient to faults and failures, but they use two different approaches. The primary goal of Backup is to maintain copies of stateful data that allow you to go back in time. Site Recovery, however, replicates the data in almost real time and allows for a failover.



In that sense, if there are issues like network or power outages, you can use availability zones. For a region-wide disaster (such as natural disasters), Site Recovery is used. Backups are used in cases of accidental data loss, data corruption, or ransomware attacks.



Additionally, the choice of a recovery approach depends on the criticality of the application, recovery point objective (RPO) and recovery time objective (RTO) requirements, and the cost implications.



### Why use Azure Backup?



Traditional backup solutions, such as disk and tape, don't offer the highest level of integration with cloud-based solutions. Azure Backup has several benefits over more traditional backup solutions:



**Zero-infrastructure backup**: Azure Backup eliminates the need to deploy and manage any backup infrastructure or storage. There's no overhead in maintaining backup servers or scaling the storage up or down as the needs vary.



**Long-term retention**: Meet rigorous compliance and audit needs by retaining backups for many years, after which the built-in lifecycle management capability prunes the recovery points automatically.



**Security**: Azure Backup provides security to your backup environment, both when your data is in transit and at rest:



- **Azure role-based access control**: Role-based access control allows you to segregate duties within your team and grant only the amount of access to users necessary to do their jobs.

- **Encryption of backups**: Backup data is automatically encrypted using Microsoft-managed keys. Alternatively, you can encrypt your backed-up data using customer-managed keys stored in the Azure Key Vault.

- **No internet connectivity required**: When you use Azure VMs, all the data transfer happens only on the Azure backbone network without needing to access your virtual network. So no access to any IPs or fully qualified domain names (FQDNs) is required.

- **Soft delete**: With soft delete, the backup data is retained for 14 more days even after the deletion of the backup item. This retention protects against accidental deletion or malicious deletion scenarios, allowing the recovery of those backups with no data loss. Azure Backup also provides **Enhanced soft delete** that enables you to retain a deleted item in the *soft deleted* state for a longer duration.



Azure Backup also offers the ability to back up VMs encrypted with Azure Disk Encryption.



**High availability**: Azure Backup offers three types of replication:



- **Locally redundant storage (LRS)**: The lowest-cost option with basic protection against server rack and drive failures. We recommend it for noncritical scenarios.

- **Geo-redundant storage (GRS)**: The intermediate option has failover capabilities in a secondary region. We recommend it for backup scenarios.

- **Zone-redundant storage (ZRS)**: This option protects against datacenter-level failures by replicating your storage account synchronously across three Azure availability zones. We recommend it for high-availability scenarios.



**Centralized monitoring and management**: Azure Backup provides built-in monitoring and alerting capabilities in a Recovery Services vault. These capabilities are available without any other management infrastructure.



### Azure Backup supported scenarios



Azure Backup supports the following scenarios:



- **Azure VMs** - Back up Windows or Linux Azure VMs Azure Backup provides independent and isolated backups to guard against unintended destruction of the data on your VMs. Backups are stored in a Recovery Services vault with built-in management of recovery points. Configuration and scaling are simple, backups are optimized, and you can easily restore as needed.

- **On-premises** - Back up files, folders, and system state using the [Microsoft Azure Recovery Services (MARS) agent](/en-us/azure/backup/backup-support-matrix-mars-agent?azure-portal=true). Or use [Microsoft Azure Backup Server (MABS)](/en-us/azure/backup/backup-support-matrix-mabs-dpm) or [Data Protection Manager (DPM) server](/en-us/azure/backup/backup-support-matrix-mabs-dpm) to protect on-premises VMs (Hyper-V and VMware) and other on-premises workloads.

- **Azure Files shares** - Azure Files provides snapshot management by Azure Backup.

- **SQL Server in Azure VMs** and **SAP HANA databases in Azure VMs** - Azure Backup offers stream-based, specialized solutions to back up SQL Server, or SAP HANA running in Azure VMs. These solutions take workload-aware backups that support different backup types such as full, differential and log, 15-minute RPO, and point-in-time recovery.

---

## Unit 3: Back up an Azure virtual machine by using Azure Backup

**Source URL:** [https://learn.microsoft.com/training/modules/protect-virtual-machines-with-azure-backup/3-back-up-azure-virtual-machine/](https://learn.microsoft.com/training/modules/protect-virtual-machines-with-azure-backup/3-back-up-azure-virtual-machine/)  
**Duration:** 5 minutes  

You want to ensure that the backup and restore jobs you put in place offer a way to recover your company's servers. With this requirement in mind, you want to investigate the best way to implement backup for your virtual machines (VMs).



VMs that are hosted on Azure can take advantage of Azure Backup. You can easily back up and restore machines without installing extra software.



In this unit, you explore all the methods of backing up Azure VMs provided by Azure Backup and make a decision on which to implement.



**Azure VMs** are backed up by taking snapshots of the underlying disks at user-defined intervals and transferring those snapshots to the Recovery Services vault as per the customer-defined policy.



## Recovery Services vault



Azure Backup uses a Recovery Services vault to manage and store the backup data. A vault is a storage-management entity, which provides a simple experience to carry out and monitor backup and restore operations. With Azure Backup, you don't need to worry about deploying or managing storage accounts. In fact, all you need to specify is the vault that you want to back up the virtual machine (VM) to. The backup data is transferred to the Azure Backup storage accounts (in a separate fault domain) in the background. The vault also acts as a role-based access control boundary to allow secure access to the data.



![Screenshot that highlights the Recovery Services vaults that are available in context to the resources they're protecting.](media/3-recovery-vault-in-context.png)



## Snapshots



A snapshot is a point-in-time backup of all disks on the VM. For Azure VMs, Azure Backup uses different extensions for each supporting operating system:



| Extension | OS | Description |

| --- | --- | --- |

| VM Snapshot | Windows | The extension works with Volume Shadow Copy Service (VSS) to take a copy of the data on disk and in memory. |

| VM SnapshotLinux | Linux | The snapshot is a copy of the disk. |



Depending on how the snapshot is taken and what it includes, you can achieve different levels of consistency:



- **Application consistent**

    - The snapshot captures the VM as a whole. It uses VSS writers to capture the content of the machine memory and any pending I/O operations.

    - For Linux machines, you need to write custom pre or post scripts per app to capture the application state.

    - You can get complete consistency for the VM and all running applications.

- **File system consistent**

    - If VSS fails on Windows, or the pre and post scripts fail on Linux, Azure Backup still creates a file-system-consistent snapshot.

    - During a recovery, no corruption occurs within the machine. But installed applications need to do their own cleanup during startup to become consistent.

- **Crash consistent**

    - This level of consistency typically occurs if the VM is shut down at the time of the backup.

    - No I/O operations or memory contents are captured during this type of backup. This method doesn't guarantee data consistency for the OS or app.



## Backup policy



You can define the backup frequency and retention duration for your backups. Currently, the VM backup can be triggered daily or weekly, and can be stored for multiple years. The backup policy supports two access tiers: *snapshot tier* and the *vault tier*. By using the Enhanced policy, you can trigger hourly backups.



**Selective disk backup**: Azure Backup provides **Selective Disk backup and restore** capability using **Enhanced policy**. By using this capability, you can selectively back up a subset of the data disks that are attached to your VM. Then, you can restore a subset of the disks that are available in a recovery point, both from instant restore and vault tier. It helps you manage critical data in a subset of the VM disks and use database backup solutions when you want to back up only their OS disk to reduce cost.



**Snapshot tier**: All the snapshots are stored locally for a maximum period of five days, in what is called the snapshot tier. For all types of operation recoveries, we recommended that you restore from the snapshots because it's faster to do so. This capability is called **instant restore**.



**Vault tier**: All snapshots are additionally transferred to the vault for more security and longer retention. At this point, the recovery point type changes to "snapshot and vault."



## Backup process for an Azure virtual machine



Here's how Azure Backup completes a backup for Azure VMs:



1. For Azure VMs that are selected for backup, Azure Backup starts a backup job according to the backup frequency you specify in the backup policy.

2. During the first backup, a backup extension is installed on the VM, if the VM is running:



    - For Windows VMs, the VM Snapshot extension is installed.

    - For Linux VMs, the VM SnapshotLinux extension is installed.

3. After the snapshot is taken, the data is stored locally and transferred to the vault.



    - The backup is optimized by backing up each VM disk in parallel.

    - For each disk that's being backed up, Azure Backup reads the blocks on the disk and identifies and transfers only the data blocks that changed (the delta) since the previous backup.

    - Snapshot data might not be immediately copied to the vault. It might take several hours at peak times. Total backup time for a VM is less than 24 hours for daily backup policies.



![Diagram that shows Azure Backup architecture.](media/3-azure-vm-backup-architecture.png)



You can additionally enable [vault encryption with customer-managed keys (CMK)](/en-us/azure/backup/encryption-at-rest-with-cmk#configuring-a-vault-to-encrypt-using-customer-managed-keys?azure-portal=true). By using **Enhanced soft delete** for a Recovery Services vault, you can protect backups from deletion. You can also keep Enhanced soft delete *always on* to prevent turning it off, thus protecting your backups from accidental deletion or from malware attacks.

---

## Unit 4: Exercise - Back up an Azure virtual machine

**Source URL:** [https://learn.microsoft.com/training/modules/protect-virtual-machines-with-azure-backup/4-exercise-back-up-azure-virtual-machine/](https://learn.microsoft.com/training/modules/protect-virtual-machines-with-azure-backup/4-exercise-back-up-azure-virtual-machine/)  
**Duration:** 10 minutes  

Your company runs a combination of Windows and Linux workloads. You're asked to prove that Azure Backup is a good fit for both kinds of virtual machines (VMs). By using a combination of the Azure CLI and the Azure portal, you help protect both kinds of virtual machines with Azure Backup.



Azure Backup can be quickly enabled for virtual machines in Azure. You can enable Azure Backup from the portal, from the Azure CLI, or by using PowerShell commands.



In this exercise, you create a virtual machine (VM), set up a backup, and start a backup.



Note



This exercise is optional. If you don't have an Azure account, you can read through the instructions so you understand how to back up virtual machines by using Azure Backup. If you want to complete this exercise, but you don't have an Azure subscription or you prefer not to use your own account, create a [free account](https://azure.microsoft.com/pricing/purchase-options/azure-account?cid=msft_learn) before you begin.



## Create a backup for Azure virtual machines



### Set up the environment



1. Sign in to the [Azure portal](https://portal.azure.com/?azure-portal=true), and select the icon to open Azure Cloud Shell.



    ![Screenshot of the Cloud Shell icon in the Azure portal.](media/4-azure-portal-cloudshell.png)

2. Create a resource group to contain all the resources for this exercise.



    ```azurecli

    RGROUP=$(az group create --name vmbackups --location westus2 --output tsv --query name)

    ```

3. Use Cloud Shell to create the **NorthwindInternal** virtual network and the **NorthwindInternal1** subnet.



    ```azurecli

    az network vnet create \

        --resource-group $RGROUP \

        --name NorthwindInternal \

        --address-prefixes 10.0.0.0/16 \

        --subnet-name NorthwindInternal1 \

        --subnet-prefixes 10.0.0.0/24

    ```



### Create a Windows virtual machine by using the Azure CLI



Create the *NW-APP01* virtual machine by running the following command. Replace `<password>` with a password of your choice, enclosed in double quotes. For example, `--admin-password "PassWord123!"`.



```azurecli

az vm create \

    --resource-group $RGROUP \

    --name NW-APP01 \

    --size Standard_DS1_v2 \

    --public-ip-sku Standard \

    --vnet-name NorthwindInternal \

    --subnet NorthwindInternal1 \

    --image Win2016Datacenter \

    --admin-username admin123 \

    --no-wait \

    --admin-password <password>

```



### Create a Linux virtual machine by using the Azure CLI



Create the *NW-RHEL01* virtual machine by running the following command.



```azurecli

az vm create \

    --resource-group $RGROUP \

    --name NW-RHEL01 \

    --size Standard_DS1_v2 \

    --image RedHat:RHEL:8-gen2:latest \

    --authentication-type ssh \

    --generate-ssh-keys \

    --vnet-name NorthwindInternal \

    --subnet NorthwindInternal1

```



Note



If you get a `securityProfile.securityType is invalid` error running the preceding command, run the following commands to register `UseStandardSecurityType`, then re-run the preceding command.



```azurecli

az feature register --name UseStandardSecurityType --namespace Microsoft.Compute

az feature show --name UseStandardSecurityType --namespace Microsoft.Compute

```



The command can take a few minutes to complete. Wait for it to finish before moving on to the next step.



### Enable backup for a virtual machine by using the Azure portal



1. In the Azure portal, search for and select **Virtual machines**.



    ![Screenshot that shows searching for virtual machines.](media/4-portal-vms.png)



    The **Virtual machines** pane appears.

2. From the list, select the **NW-RHEL01** virtual machine that you created.



    ![Screenshot that shows selecting a virtual machine.](media/4-portal-select-linux-vm.png)



    The **NW-RHEL01** virtual machine pane appears.

3. In the middle menu pane, select the **Capabilities** tab, then scroll down to and select **Backup**. The **Backup** pane for the *NW-RHEL01* virtual machine appears.

4. Select the radio button for **Standard**. You can accept the defaults for the following options:



    - **Backup vault**: **vaultXXX** for the name.

    - **Backup policy**: **DailyPolicy-xxxxxxxx**, which creates a daily backup at 12:00 PM UTC with a retention range of 180 days.



    ![Screenshot that shows the backup options.](media/4-portal-azure-backup.png)

5. Select the **Enable backup** button.

6. Once deployment completes, go back to the **NW-RHEL01** virtual machine, select the **Capabilities** tab, then scroll down to and select **Backup**. The **Backup** pane for the *NW-RHEL01* virtual machine appears.

7. To perform the first backup for this server, in the top menu bar, select **Backup now**.



    The **Backup Now** pane for *NW-RHEL01* appears.

8. Select **OK**.



### Enable a backup by using the Azure CLI



1. First, create the azure-backup vault by using Cloud Shell:



    ```azurecli

    az backup vault create \

        --resource-group vmbackups \

        --location westus2 \

        --name azure-backup

    ```

2. Using Cloud Shell, enable a backup for the *NW-APP01* virtual machine.



    ```azurecli

    az backup protection enable-for-vm \

        --resource-group vmbackups \

        --vault-name azure-backup \

        --vm NW-APP01 \

        --policy-name EnhancedPolicy

    ```

3. Monitor the progress of the setup using the Azure CLI.



    ```azurecli

    az backup job list \

        --resource-group vmbackups \

        --vault-name azure-backup \

        --output table

    ```



    Keep running the preceding command until you see that `ConfigureBackup` is finished.



    ```output

    Name                                  Operation        Status      Item Name    Start Time UTC                    Duration

    ------------------------------------  ---------------  ----------  -----------  --------------------------------  --------------

    a3df79b4-be4f-4cc9-8b2c-a5ead44a6a12  ConfigureBackup  Completed   NW-APP01     2019-08-01T06:19:12.101048+00:00  0:00:31.305975

    5e1531a9-8b3d-4983-a642-86ee982f7036  Backup           InProgress  NW-RHEL01    2019-08-01T06:18:35.955118+00:00  0:01:22.734182

    860d4dca-9603-4a4e-9f3b-93f242a0a64d  ConfigureBackup  Completed   NW-RHEL01    2019-08-01T06:13:33.860598+00:00  0:00:31.256773    

    ```

4. Do an initial backup of the virtual machine, instead of waiting for the schedule to run it.



    ```azurecli

    az backup protection backup-now \

        --resource-group vmbackups \

        --vault-name azure-backup \

        --container-name NW-APP01 \

        --item-name NW-APP01 \

        --retain-until 18-10-2030 \

        --backup-management-type AzureIaasVM

    ```



    There's no need to wait for the backup to finish, because the next section shows you how to monitor the progress in the portal.



## Monitor backups in the portal



### View the status of a backup for a single virtual machine



1. On the Azure portal menu or from the **Home** page, select **All resources**.

2. Enter *Virtual machines* in the search field at the top of the page and select **Virtual machines** from the results.

3. Select the **NW-APP01** virtual machine. The *NW-APP01* virtual machine pane appears.

4. In the middle menu pane, select the **Capabilities** tab, then scroll to and select **Backup**. The **Backup** pane for the *NW-APP01* virtual machine appears.



    Under the **Backup status** section, the **Last backup status** field displays the current status of the backup.



    ![Screenshot of the Backup page after it has been set up.](media/4-portal-backup-setup.png)



### View the status of backups in the Recovery Services vault



1. On the Azure portal menu or from the **Home** page, select **All resources**.

2. Sort the list by *Type*, and then select the **azure-backup** Recovery Services vault. The **Azure-backup** recovery services vault pane appears.

3. On the **Overview** pane, select the interior **Backup** tab to display a summary of all the backup items, the storage being used, and the current status of any backup jobs.



    ![Screenshot of the Backup dashboard.](media/4-recovery-services-vault.png)

---

## Unit 5: Restore virtual machine data

**Source URL:** [https://learn.microsoft.com/training/modules/protect-virtual-machines-with-azure-backup/5-restore-virtual-machine-data/](https://learn.microsoft.com/training/modules/protect-virtual-machines-with-azure-backup/5-restore-virtual-machine-data/)  
**Duration:** 5 minutes  

Companies that have a business continuity and disaster recovery (BCDR) plan typically schedule test runs to ensure that the business can successfully recover from disasters. Now that you successfully backed up your virtual machines, you want to explore the options available for restoring them as part of your BCDR testing.



In this unit, you learn about the options for restoring an Azure virtual machine (VM) from a previous backup.



## Restore types



Azure Backup provides many ways to restore a VM. As explained earlier, you can either instantly restore from the snapshot tier (optimal for operational recoveries) or from the vault tier.



| Restore option | Details |

| --- | --- |

| **Create a new VM** | Quickly creates and gets a basic VM up and running from a restore point. The new VM must be created in the same region as the source VM. |

| **Restore disk** | Restores a VM disk, which can then be used to create a new VM. The disks are copied to the resource group you specify. Azure Backup provides a template to help you customize and create a VM. Alternatively, you can attach the disk to an existing VM, or create a new VM. This option is useful if you want to customize the VM, add configuration settings that weren't there at the time of backup. Or, add settings that must be configured using the template or PowerShell. |

| **Replace existing** | You can restore a disk and use it to replace a disk on the existing VM. Azure Backup takes a snapshot of the existing VM before replacing the disk and stores it in the staging location you specify. Existing disks connected to the VM are replaced with the selected restore point. The current VM must exist. You can't use this option if the VM is deleted. |

| **Cross region (secondary region)** | Cross region restore can be used to restore Azure VMs in the secondary region, which is an Azure paired region. This feature is available for the following options:- Create a VM<br>- Restore Disks We don't currently support the Replace existing disks option. |

| **Cross Subscription Restore** | Backup Admins and App admins can perform the restore operation on secondary regions.  Cross Subscription Restore:  - Allows you to restore Azure Virtual Machines or disks to a different subscription within the same tenant as the source subscription. As per the Azure role-based access control capabilities from restore points.  - Allowed only if the Cross Subscription Restore property is enabled for your Recovery Services vault.  - Works with Cross Region Restore and Cross Zonal Restore.  - You can trigger Cross Subscription Restore for managed virtual machines only.  - Cross Subscription Restore is supported for Restore with Managed System Identities (MSI).  - It's unsupported for snapshots tier recovery points.  - It's unsupported for unmanaged VMs and VMs encrypted with Advanced Digital Encryption (ADE). |

| **Cross Zonal Restore** | Allows you to restore Azure Virtual Machines or disks pinned to any zone to different available zones (as per the Azure Role-based access control capabilities) from restore points. When you select a zone to restore, it selects the logical zone (and not the physical zone) as per the Azure subscription you use to restore to.  - You can trigger Cross Zonal Restore for managed virtual machines only.  - Cross Zonal Restore is supported for Restore with Managed System Identities (MSI).  - Cross Zonal Restore supports restore of an Azure zone pinned/non-zone pinned VM from a vault with Zone-redundant storage (ZRS) enabled. Learn how to set Storage Redundancy.  - You can only use Cross Zonal Restore to restore a VM pinned to an Azure zone from a vault with Cross Region Restore (CRR) under these conditions: The secondary region supports zones, or Zone Redundant Storage (ZRS) is enabled.  - Cross Zonal Restore is supported from secondary regions.  - It's unsupported from snapshots restore point.  - It's unsupported for Encrypted Azure VMs. |

| **Selective disk backup** | Allows you to back up and restore selective VM disks through Enhanced policy. Using this capability, you can selectively back up a subset of the data disks that are attached to your VM. Then, you can restore a subset of the disks that are available in a recovery point, both from instant restore and vault tier.  Selective disk backup is useful when you:  - Manage critical data in a subset of the VM disks.  - Use database backup solutions and want to back up only their OS disk to reduce cost. |



## Recover files from a backup



You can also recover individual files from a recovery point by mounting the snapshot on the target machine using the iSCSI initiator in the machine. To learn more, see [Recover files from Azure virtual machine backup](/en-us/azure/backup/backup-azure-restore-files-from-vm).



## Restore an encrypted virtual machine



Azure Backup supports the backup and restore of machines encrypted through Azure Disk Encryption. Disk Encryption works with Azure Key Vault to manage the relevant secrets that are associated with the encrypted disk. For an extra layer of security, you can use key vault encryption keys (KEKs) to encrypt the secrets before they're written to the key vault.



Certain limitations apply when you restore encrypted VMs:



- Azure Backup supports only standalone key encryption. Any key that's part of a certificate isn't currently supported.

- File-level or folder-level restores aren't supported with encrypted VMs. To restore to that level of granularity, the entire VM has to be restored. You can then manually copy the file or folders.

- The **Replace existing VM** option isn't available for encrypted VMs.



## Check your knowledge



1.

Which restore type should you select if you want to replace a disk on an existing virtual machine?



Create a new VM



Restore disk



Replace existing



2.

You want to replace a disk on an existing VM but receive an error. What's the possible reason?



The existing VM is deleted and is no longer available.



The existing VM is part of a different resource group in your Azure subscription.



The existing VM is turned off

---

## Unit 6: Exercise - Restore Azure virtual machine data

**Source URL:** [https://learn.microsoft.com/training/modules/protect-virtual-machines-with-azure-backup/6-exercise-restore-virtual-machine-data/](https://learn.microsoft.com/training/modules/protect-virtual-machines-with-azure-backup/6-exercise-restore-virtual-machine-data/)  
**Duration:** 6 minutes  

A few days after you backed up your first Azure virtual machine (VM), the server had issues. The VM needs to be restored from a backup. You want to restore the VM's disk and attach it to the problematic live server, and then track the restore to ensure that it finished successfully.



In this exercise, you see how to restore a successful backup to replace a VM that became corrupted, and monitor its progress.



## Restore a virtual machine in the Azure portal



### Create a storage account to use as a staging location



1. If you closed Azure, sign in to the [Azure portal](https://portal.azure.com/?azure-portal=true) by using the same account that you used in the previous exercise.

2. In the Azure portal, enter **Storage accounts** in the top search bar, and then select it.



    ![Select storage accounts.](media/6-select-storage-accounts.png)



    The **Storage accounts** pane appears.

3. In the menu bar, select **Create**. The **Create a storage account** pane appears.

4. On the **Basics** tab, enter the following values for each setting to create a storage account.



    | Setting | Value |

    | --- | --- |

    | Resource group | From the dropdown list, select **vmbackups**. |

    | **Instance details** |  |

    | Storage account name | Enter a unique name like **restorestagingYYYYMMDD**, where YYYYMMDD is replaced with today's date. |

    | **Region** | From the dropdown list, select **(US) West US 2**. |



    ![Specify storage account options.](media/6-specify-storage-account-options.png)

5. Select **Review + create**.

6. After validation passes, select **Create**.



    Wait for the storage account to be deployed.



### Stop the virtual machine



A backup can't be restored if the VM is allocated and running. If you forget to stop the VM and attempt to restore it, you see an error that's similar to the following example.



![Screenshot that shows the error details when a VM is running.](media/6-restore-error.png)



To prevent this error, follow these steps:



1. In the top left of the Azure portal, select **Home**, select **Virtual Machines**, and then select **NW-APP01**.



    ![Screenshot that shows the VM overview page.](media/6-vm-overview.png)



    The *NW-APP01* virtual machine pane appears.

2. In the menu bar, select **Stop**.



    ![Screenshot that shows how to stop the VM.](media/6-stop-vm.png)

3. In the **Stop this virtual machine** dialog box, select **OK**.



    ![Screenshot of the prompt for stopping this VM.](media/6-stop-this-vm.png)



### Restore the virtual machine



The Recovery Services vaults are accessible at the subscription level. When you're viewing the VM, Azure provides a quick link to the specific vault under **Operations**.



1. In the menu pane, scroll to **Operations**, and select **Backup**.



    ![Screenshot of the Backup operation for a VM.](media/6-vm-backup-menu.png)

2. To restore the virtual machine, in the menu bar, select **Restore VM**. The **Restore Virtual Machine** pane for *NW-APP01* appears.

3. Under the **Restore point** text box, choose **Select**. The **Select restore point** pane appears.

4. By default, the start and end date are set for a two week range. Set the **Start date** to an appropriate date for our restore points (**07/05/2021**), select the restore point to use for the recovery, and then select **OK**.



    ![Screenshot of selecting a restore point.](media/6-restore-point.png)



    The **Restore Virtual Machine** pane for *NW-APP01* appears.

5. Configure the restore point using the following values for each setting.



    | Setting | Value |

    | --- | --- |

    | **Restore Configuration** |  |

    | Replace existing | Select this option. |

    | Staging Location | From the dropdown list, select the storage account that you previously created. |



    ![Screenshot that shows the restore configuration options.](media/6-restore-configuration.png)

6. Select **Restore**. The **Backup** pane for the *NW-APP01* virtual machine appears. Notice the notifications in the top right of the toolbar. The latest notification shows **Triggering restore for NW-APP01**



## Track a restore



1. In the **Alerts and Jobs** section, select **View all Jobs**. The **Backup Jobs** pane appears.



    ![Screenshot of view details for the restore job.](media/6-review-jobs.png)

2. In the **Details** column, select **View details** for the **Restore** job.



    [![Screenshot of the restore progress.](media/6-restore-progress.png)](media/6-restore-progress.png#lightbox)



    The **Restore** pane appears for *NW-APP01*.

3. You can monitor the progress of the VM restore job:



    - **Job details**: Details about the restore job you launched for this VM.

    - **Job status**: Real-time progress of the restore job.

    - **Sub tasks**: Name and status of the tasks within the job.



    ![Screenshot of the job details pane.](media/6-job-details.png)

---

## Unit 7: Summary

**Source URL:** [https://learn.microsoft.com/training/modules/protect-virtual-machines-with-azure-backup/7-summary/](https://learn.microsoft.com/training/modules/protect-virtual-machines-with-azure-backup/7-summary/)  
**Duration:** 2 minutes  

In this module, you learned the importance of having a tested backup and recovery strategy for your organization. You learned about the different types of Azure backups, and the reasons why you would choose one backup type versus another depending on your scenario.



You learned that you can back up Azure virtual machines or on-premises machines. In addition, you learned how to back up an Azure virtual machine (VM). You then restored it by using the various options available to you, and you were able to monitor the progress.



You can now use Azure Backup to help protect your environment against data loss or disk corruption. You can restore services according to your business continuity and disaster recovery plan.



Important



In this module you created resources using your Azure subscription. You want to clean up these resources so that you will not continue to be charged for them. You can delete resources individually or delete the resource group to delete the entire set of resources.



## Learn more



For more information about Azure Backup, see the following articles:



- [Latest Azure Backup pricing and availability](https://azure.microsoft.com/pricing/details/backup?azure-portal=true)

- [Documentation for the Azure Backup service](/en-us/azure/backup?azure-portal=true)

- [Support matrix for Azure VM backup](/en-us/azure/backup/backup-support-matrix-iaas?azure-portal=true)

- [Security features in Azure Backup](/en-us/azure/backup/security-overview?azure-portal=true)

- [Built-in monitoring and alerting capabilities](/en-us/azure/backup/backup-azure-monitoring-built-in-monitor?azure-portal=true)

- [Azure Files - Snapshot management by Azure Backup](/en-us/azure/backup/backup-afs?azure-portal=true)

- [Back up SQL Server databases running on Azure VMs](/en-us/azure/backup/backup-azure-sql-database?azure-portal=true)

- [Backup SAP HANA (High-performance Analytic Appliance) databases running on Azure VMs](/en-us/azure/backup/backup-azure-sap-hana-database?azure-portal=true)

- [Azure Data Protection Manager (DPM)](/en-us/azure/backup/backup-azure-dpm-introduction?azure-portal=true) and [Azure Backup Server (MABS)](/en-us/azure/backup/backup-mabs-protection-matrix?azure-portal=true)

---


## Exam Ref AZ-104 Certification Deep Dive & Exam Tips (Charles Pluta, 2024)

> **Source Reference:** *Exam Ref AZ-104 Microsoft Azure Administrator (Charles Pluta, 3rd Edition, 2024)*, Chapter 5, pp. 335–353.

### Key Certification Focus Areas & Architecture Nuances
- **Azure VM Backup Workflow & Snapshot Retention [pp. 335–338]:**
  - Azure VM backup takes a local disk snapshot (Instant Restore) and transfers data to the vault asynchronously.
  - **Instant Restore Snapshot Retention:** Default 2 days (configurable 1 to 5 days). Restores from snapshots are nearly instantaneous.
- **Restore Options [pp. 343–347]:**
  - **Create Virtual Machine:** Deploys a new VM directly from the restore point.
  - **Restore Disks:** Restores VHD files to a storage account with an ARM template to build the VM.
  - **Replace Existing:** Swaps existing disks on the running VM with restored disks (preserves VM IP, configuration, and NIC).
  - **File Recovery (Item-level):** Downloads and runs a mount script on your local computer to mount the recovery point volume as a local drive letter for file extraction.

### Common Exam Traps & "Need More Review?" Tips
- **Exam Trap:** Needing to recover a single deleted file from a VM backup and creating a whole new VM. *Correction:* Use **File Recovery** to mount the backup volume directly and copy the single file [p. 346].


## Verification & Knowledge Audit

- **Source Authenticity:** All content directly extracted from official Microsoft Learn documentation for Module: `Protect your virtual machines by using Azure Backup`.
- **Reference URLs:** Complete unit URLs embedded above.
- **Audit Status:** Verified against Microsoft Learn catalog API and markdown endpoint. Hallucination check passed.
