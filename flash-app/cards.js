/**
 * flash-app/cards.js
 * Compiled Flashcard Dataset for AZ-104 Study WebApp.
 * Total Cards: 409
 */

window.FLASHCARD_DATA = [
  {
    "id": "p01-m01-01",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "Azure Cloud Shell - Storage Mount",
    "question": "Where does Azure Cloud Shell mount its persistent file share inside the backing Linux container?",
    "answer": "At the directory `/home/<user>/clouddrive`.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 3; MS Learn Cloud Shell Overview"
  },
  {
    "id": "p01-m01-02",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "Azure Cloud Shell - Backing Storage Service",
    "question": "Which Azure storage service provides the persistent storage volume for Azure Cloud Shell?",
    "answer": "Azure Files (an Azure File Share).",
    "source": "MS Learn Intro to Cloud Shell, Unit 3; Exam Ref AZ-104, Ch. 1, p. 3"
  },
  {
    "id": "p01-m01-03",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "Azure Cloud Shell - Inactivity Timeout",
    "question": "How long can an Azure Cloud Shell session remain idle before it automatically times out and disconnects?",
    "answer": "20 minutes of inactivity.",
    "source": "MS Learn Intro to Cloud Shell, Unit 3; Exam Ref AZ-104, Ch. 1, p. 4"
  },
  {
    "id": "p01-m01-04",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "Azure Cloud Shell - Storage Persistence Scope",
    "question": "What happens to files stored outside of `/home/<user>/clouddrive` (such as in `/tmp`) when a Cloud Shell session terminates?",
    "answer": "They are permanently discarded because the temporary container host is deallocated.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 3"
  },
  {
    "id": "p01-m01-05",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "Azure Cloud Shell - Shell Environment Parity",
    "question": "Do Bash and PowerShell environments in Azure Cloud Shell share the same persistent storage file share?",
    "answer": "Yes, both Bash and PowerShell attach to the exact same `clouddrive` Azure Files share.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 4"
  },
  {
    "id": "p01-m01-06",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "Azure Cloud Shell - Built-in Text Editor",
    "question": "Which CLI command opens the integrated Monaco-based text editor in Azure Cloud Shell Classic mode?",
    "answer": "The `code` command (e.g., `code <filename>`).",
    "source": "MS Learn Intro to Cloud Shell, Unit 3; Exam Ref AZ-104, Ch. 1, p. 5"
  },
  {
    "id": "p01-m01-07",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "Azure Cloud Shell - Administrator Permissions",
    "question": "Can an administrator execute `sudo` commands or gain root privileges inside the Azure Cloud Shell container?",
    "answer": "No, Cloud Shell provides a standard unprivileged user container without `sudo` access.",
    "source": "MS Learn Intro to Cloud Shell, Unit 4"
  },
  {
    "id": "p01-m01-08",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "Azure Cloud Shell - Direct Web Access",
    "question": "What direct URL allows accessing Azure Cloud Shell full-screen in a standalone browser window?",
    "answer": "`https://shell.azure.com`",
    "source": "MS Learn Intro to Cloud Shell, Unit 3"
  },
  {
    "id": "p01-m01-09",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "Azure Cloud Shell - Encryption at Rest",
    "question": "How is the backing infrastructure of Azure Cloud Shell secured against data-at-rest threats by default?",
    "answer": "It is compliant with double encryption at rest by default without requiring user configuration.",
    "source": "MS Learn Intro to Cloud Shell, Unit 2"
  },
  {
    "id": "p01-m01-10",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "Azure Cloud Shell - Concurrent Session Limit",
    "question": "How many concurrent active Cloud Shell instances can a single user run simultaneously?",
    "answer": "Only one instance at a time per user account.",
    "source": "MS Learn Intro to Cloud Shell, Unit 4"
  },
  {
    "id": "p01-m01-11",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "Azure Cloud Shell - Advanced Storage Configuration",
    "question": "When setting up Cloud Shell with Advanced Settings, which three existing resource components can you explicitly specify?",
    "answer": "An existing Resource Group, Storage Account, and File Share.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 3"
  },
  {
    "id": "p01-m01-12",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "Azure Cloud Shell - Regional Affinity",
    "question": "Can a single Azure Cloud Shell storage account be spread across multiple Azure regions simultaneously?",
    "answer": "No, the allocated storage account is pinned to a single designated Azure region.",
    "source": "MS Learn Intro to Cloud Shell, Unit 4"
  },
  {
    "id": "p01-m01-13",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "Azure Cloud Shell - Host Operating System",
    "question": "On which operating system kernel do both the Bash and PowerShell Cloud Shell containers execute?",
    "answer": "A Linux container environment (CBL-Mariner / Ubuntu).",
    "source": "Exam Ref AZ-104, Ch. 1, p. 4"
  },
  {
    "id": "p01-m01-14",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "Azure Cloud Shell - Module Updates",
    "question": "Who is responsible for updating the Azure CLI (`az`) and Azure PowerShell (`Az`) modules in Cloud Shell?",
    "answer": "Microsoft automatically maintains and updates all modules in the hosted container.",
    "source": "MS Learn Intro to Cloud Shell, Unit 2"
  },
  {
    "id": "p01-m01-15",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "Azure Cloud Shell - Built-in IaC Tools",
    "question": "Name two third-party Infrastructure as Code (IaC) tools preinstalled in Azure Cloud Shell.",
    "answer": "Terraform and Ansible.",
    "source": "MS Learn Intro to Cloud Shell, Unit 3 table"
  },
  {
    "id": "p01-m02-01",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "ARM Templates - Syntax Type",
    "question": "What syntax style do ARM templates use to define resources compared to imperative scripts?",
    "answer": "Declarative syntax (defining what the target state looks like rather than step-by-step commands).",
    "source": "MS Learn Deploy Infrastructure ARM, Unit 2; Exam Ref AZ-104, Ch. 3, p. 131"
  },
  {
    "id": "p01-m02-02",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "ARM Templates - Idempotency",
    "question": "What does it mean that ARM template deployments are 'idempotent'?",
    "answer": "Deploying the same template repeatedly results in the exact same resource state without unintended duplicate side effects.",
    "source": "MS Learn Deploy Infrastructure ARM, Unit 2; Exam Ref AZ-104, Ch. 3, p. 131"
  },
  {
    "id": "p01-m02-03",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "ARM Templates - Incremental vs Complete Mode",
    "question": "What happens to existing resources not defined in the template when deploying in Incremental Mode?",
    "answer": "Existing resources are left untouched and unchanged.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 132; MS Learn ARM Deployment Modes"
  },
  {
    "id": "p01-m02-04",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "ARM Templates - Complete Mode Deletion",
    "question": "What happens to existing resources in the resource group that are NOT defined in the template when deploying in Complete Mode?",
    "answer": "Resource Manager permanently deletes them (unless prevented by locks or specific resource behaviors).",
    "source": "Exam Ref AZ-104, Ch. 3, p. 132"
  },
  {
    "id": "p01-m02-05",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "ARM Templates - Default Deployment Mode",
    "question": "What is the default deployment mode when deploying an ARM template via CLI or PowerShell if not specified?",
    "answer": "Incremental Mode.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 132"
  },
  {
    "id": "p01-m02-06",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "ARM Templates - JSON Top-Level Sections",
    "question": "Name the four primary top-level sections in an ARM template used to define inputs, values, infrastructure, and return data.",
    "answer": "`parameters`, `variables`, `resources`, and `outputs`.",
    "source": "MS Learn Deploy Infrastructure ARM, Unit 2; Exam Ref AZ-104, Ch. 3, p. 131"
  },
  {
    "id": "p01-m02-07",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "ARM Templates - Parameters Purpose",
    "question": "What is the purpose of the `parameters` section in an ARM template?",
    "answer": "To allow external values to be passed in at deployment time, making the template reusable across environments.",
    "source": "MS Learn Deploy Infrastructure ARM, Unit 4"
  },
  {
    "id": "p01-m02-08",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "ARM Templates - Variables Purpose",
    "question": "How do `variables` differ from `parameters` in an ARM template?",
    "answer": "`variables` are calculated internally within the template and cannot be overridden by external deployment inputs.",
    "source": "MS Learn Deploy Infrastructure ARM, Unit 4; Exam Ref AZ-104, Ch. 3, p. 131"
  },
  {
    "id": "p01-m02-09",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "ARM Templates - uniqueString Function",
    "question": "What does the ARM template function `uniqueString()` return, and why is it used?",
    "answer": "A 13-character deterministic hash based on input strings, commonly used to create globally unique resource names.",
    "source": "MS Learn Deploy Infrastructure ARM, Unit 4; Exam Ref AZ-104, Ch. 3, p. 133"
  },
  {
    "id": "p01-m02-10",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "ARM Templates - Dynamic Location Best Practice",
    "question": "What expression should you use in an ARM template to set a resource location to match its containing resource group?",
    "answer": "`[resourceGroup().location]`",
    "source": "MS Learn Deploy Infrastructure ARM, Unit 4; Exam Ref AZ-104, Ch. 3, p. 133"
  },
  {
    "id": "p01-m02-11",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "ARM Templates - Resource Dependencies",
    "question": "Which ARM template property explicitly enforces the sequential deployment order of dependent resources?",
    "answer": "The `dependsOn` property array.",
    "source": "MS Learn Deploy Infrastructure ARM, Unit 2; Exam Ref AZ-104, Ch. 3, p. 134"
  },
  {
    "id": "p01-m02-12",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "ARM Templates - Parallel Execution",
    "question": "How does Azure Resource Manager handle the deployment of multiple independent resources defined in a template?",
    "answer": "It deploys them in parallel to maximize deployment speed.",
    "source": "MS Learn Deploy Infrastructure ARM, Unit 2"
  },
  {
    "id": "p01-m02-13",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "ARM Templates - What-If Operation",
    "question": "Which ARM deployment feature allows administrators to preview resource changes and deletions before applying a template?",
    "answer": "The What-If operation (`az deployment group what-if` or `Get-AzResourceGroupDeploymentWhatIfResult`).",
    "source": "Exam Ref AZ-104, Ch. 3, p. 133"
  },
  {
    "id": "p01-m02-14",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "ARM Templates - Pre-Deployment Validation",
    "question": "How can you validate an ARM template syntax and quota checks without actually provisioning resources?",
    "answer": "Using `az deployment group validate` or `Test-AzResourceGroupDeployment`.",
    "source": "MS Learn Deploy Infrastructure ARM, Unit 3; Exam Ref AZ-104, Ch. 3, p. 133"
  },
  {
    "id": "p01-m02-15",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "ARM Templates - Outputs Section",
    "question": "What is the primary function of the `outputs` section in an ARM template?",
    "answer": "To return values generated during deployment (such as provisioned IP addresses or FQDNs) back to the caller.",
    "source": "MS Learn Deploy Infrastructure ARM, Unit 4; Exam Ref AZ-104, Ch. 3, p. 131"
  },
  {
    "id": "p01-m02-16",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "ARM Templates - Parameter Constraints",
    "question": "Name two parameter constraint attributes you can define in an ARM template to restrict valid inputs.",
    "answer": "`allowedValues` and `minValue`/`maxValue` (or `minLength`/`maxLength`).",
    "source": "MS Learn Deploy Infrastructure ARM, Unit 4"
  },
  {
    "id": "p01-m02-17",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "ARM Templates - Parameter File Extension",
    "question": "How are external parameter values conventionally provided to an ARM template deployment?",
    "answer": "Through a JSON parameter file (e.g., `azuredeploy.parameters.json`).",
    "source": "Exam Ref AZ-104, Ch. 3, p. 132"
  },
  {
    "id": "p01-m02-18",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "ARM Templates - Bicep Relationship",
    "question": "What is the relationship between Azure Bicep code and ARM JSON templates?",
    "answer": "Bicep is a domain-specific language that compiles directly down to standard ARM JSON templates.",
    "source": "MS Learn Deploy Infrastructure ARM, Unit 1 note; Exam Ref AZ-104, Ch. 3, p. 135"
  },
  {
    "id": "p01-m02-19",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "Bicep - Syntax Advantages",
    "question": "What primary syntax advantages does Azure Bicep offer compared to JSON ARM templates?",
    "answer": "Bicep provides cleaner concise syntax, direct module reuse, automatic dependency management via symbolic names, and eliminates complex JSON bracket escaping.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 135; MS Learn Bicep Basics, Unit 2"
  },
  {
    "id": "p01-m02-20",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "Bicep - Decompiling ARM JSON",
    "question": "What CLI command converts an existing ARM JSON template into an equivalent Bicep file?",
    "answer": "`az bicep decompile --file <template.json>`",
    "source": "Exam Ref AZ-104, Ch. 3, p. 137; MS Learn Bicep Basics, Unit 5"
  },
  {
    "id": "p01-m02-21",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "ARM Templates - Export Deployment",
    "question": "Where can you export an existing resource group's configuration as an ARM template?",
    "answer": "In the Azure Portal under Resource Group > 'Export template', or under Resource Group > 'Deployments' history.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 134; MS Learn Deploy Infrastructure ARM, Unit 5"
  },
  {
    "id": "p01-m02-22",
    "section": "01-prerequisites-for-azure-administrators",
    "topic": "Bicep - Direct Deployment Command",
    "question": "Which Azure CLI command directly deploys a `.bicep` file to a resource group without precompiling to JSON?",
    "answer": "`az deployment group create --resource-group <rg> --template-file <main.bicep>`",
    "source": "Exam Ref AZ-104, Ch. 3, p. 136; MS Learn Bicep Basics, Unit 3"
  },
  {
    "id": "p02-m01-01",
    "section": "02-manage-identities-and-governance",
    "topic": "Microsoft Entra ID - Authentication Protocols",
    "question": "Which modern authentication protocols does Microsoft Entra ID support natively for web and cloud applications?",
    "answer": "SAML 2.0, OpenID Connect (OIDC), OAuth 2.0, and WS-Federation.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 2; MS Learn Understand Entra ID, Unit 2"
  },
  {
    "id": "p02-m01-02",
    "section": "02-manage-identities-and-governance",
    "topic": "Microsoft Entra ID - Protocol Differences vs AD DS",
    "question": "Does Microsoft Entra ID natively support legacy Kerberos and NTLM authentication without add-on domain services?",
    "answer": "No, native Entra ID uses HTTP-based web protocols; Kerberos and NTLM require Active Directory Domain Services or Microsoft Entra Domain Services.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 3; MS Learn Understand Entra ID, Unit 2"
  },
  {
    "id": "p02-m01-03",
    "section": "02-manage-identities-and-governance",
    "topic": "Microsoft Entra ID - Edition Requirements for P1",
    "question": "What minimum Microsoft Entra ID edition is required for dynamic group membership and on-premises password writeback?",
    "answer": "Microsoft Entra ID P1.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 4; MS Learn Understand Entra ID, Unit 4"
  },
  {
    "id": "p02-m01-04",
    "section": "02-manage-identities-and-governance",
    "topic": "Microsoft Entra ID - Edition Requirements for P2",
    "question": "Which advanced security features specifically require Microsoft Entra ID P2 licenses?",
    "answer": "Privileged Identity Management (PIM) and Microsoft Entra ID Protection (risk-based Conditional Access).",
    "source": "Exam Ref AZ-104, Ch. 1, p. 4; MS Learn Understand Entra ID, Unit 4"
  },
  {
    "id": "p02-m01-05",
    "section": "02-manage-identities-and-governance",
    "topic": "Microsoft Entra ID - Default Domain Name",
    "question": "What domain suffix is assigned by default to a newly created Microsoft Entra ID tenant before adding a custom domain?",
    "answer": "`.onmicrosoft.com` (e.g., `contoso.onmicrosoft.com`).",
    "source": "Exam Ref AZ-104, Ch. 1, p. 7; MS Learn Understand Entra ID, Unit 3"
  },
  {
    "id": "p02-m01-06",
    "section": "02-manage-identities-and-governance",
    "topic": "Microsoft Entra ID - Custom Domain Verification Record",
    "question": "Which DNS record type is typically created at your domain registrar to verify domain ownership in Microsoft Entra ID?",
    "answer": "A DNS TXT record (or alternately an MX record).",
    "source": "Exam Ref AZ-104, Ch. 1, p. 7; MS Learn Understand Entra ID, Unit 3"
  },
  {
    "id": "p02-m01-07",
    "section": "02-manage-identities-and-governance",
    "topic": "Microsoft Entra ID - Tenant Definition",
    "question": "What is a Microsoft Entra ID tenant?",
    "answer": "A dedicated, isolated instance of Microsoft Entra ID that represents an organization and houses its directory objects.",
    "source": "MS Learn Understand Entra ID, Unit 2"
  },
  {
    "id": "p02-m01-08",
    "section": "02-manage-identities-and-governance",
    "topic": "Microsoft Entra ID - Primary Domain Name Deletion",
    "question": "Can you delete the initial `.onmicrosoft.com` domain name from a Microsoft Entra ID tenant?",
    "answer": "No, the initial `.onmicrosoft.com` domain is immutable and cannot be deleted or renamed.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 8"
  },
  {
    "id": "p02-m01-09",
    "section": "02-manage-identities-and-governance",
    "topic": "Microsoft Entra ID - Subscription Directory Association",
    "question": "Can an Azure subscription trust more than one Microsoft Entra ID tenant simultaneously?",
    "answer": "No, each Azure subscription can trust only one Microsoft Entra tenant at a time.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 11; MS Learn Understand Entra ID, Unit 3"
  },
  {
    "id": "p02-m01-10",
    "section": "02-manage-identities-and-governance",
    "topic": "Microsoft Entra ID - Single Tenant Multiple Subscriptions",
    "question": "Can multiple Azure subscriptions trust the same Microsoft Entra ID tenant?",
    "answer": "Yes, a single tenant can be trusted by multiple subscriptions.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 11"
  },
  {
    "id": "p02-m01-11",
    "section": "02-manage-identities-and-governance",
    "topic": "Microsoft Entra ID - Flat vs Hierarchical Structure",
    "question": "Does Microsoft Entra ID use Organizational Units (OUs) and Group Policy Objects (GPOs) like Windows Server AD?",
    "answer": "No, Entra ID is a flat directory structure without OUs or native Active Directory GPOs.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 3"
  },
  {
    "id": "p02-m01-12",
    "section": "02-manage-identities-and-governance",
    "topic": "Microsoft Entra ID - Hybrid Identity Sync Tool",
    "question": "Which tool synchronizes on-premises Active Directory objects into Microsoft Entra ID?",
    "answer": "Microsoft Entra Connect (or Microsoft Entra Cloud Sync).",
    "source": "Exam Ref AZ-104, Ch. 1, p. 5; MS Learn Understand Entra ID, Unit 4"
  },
  {
    "id": "p02-m02-01",
    "section": "02-manage-identities-and-governance",
    "topic": "Identity Management - User Types",
    "question": "What are the three primary types of user accounts in Microsoft Entra ID based on their origin?",
    "answer": "Cloud identities (created natively in Entra ID), Directory-synced identities (synced from on-premises AD), and Guest identities (B2B invited users).",
    "source": "Exam Ref AZ-104, Ch. 1, p. 13; MS Learn Manage Identities, Unit 2"
  },
  {
    "id": "p02-m02-02",
    "section": "02-manage-identities-and-governance",
    "topic": "Identity Management - Deleted User Soft-Delete Window",
    "question": "How long does a deleted user remain in the 'Deleted users' recycle bin before permanent deletion?",
    "answer": "30 days (during which it can be restored with its original permissions intact).",
    "source": "Exam Ref AZ-104, Ch. 1, p. 15; MS Learn Manage Identities, Unit 3"
  },
  {
    "id": "p02-m02-03",
    "section": "02-manage-identities-and-governance",
    "topic": "Identity Management - Bulk Operations Format",
    "question": "What file format is required when performing bulk user creation or group membership updates in Microsoft Entra admin center?",
    "answer": "CSV (Comma-Separated Values) format using Microsoft's downloadable template.",
    "source": "MS Learn Manage Identities, Unit 4; Exam Ref AZ-104, Ch. 1, p. 17"
  },
  {
    "id": "p02-m02-04",
    "section": "02-manage-identities-and-governance",
    "topic": "Identity Management - Group Types",
    "question": "What are the two types of groups supported in Microsoft Entra ID?",
    "answer": "Security groups and Microsoft 365 groups.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 19; MS Learn Manage Identities, Unit 6"
  },
  {
    "id": "p02-m02-05",
    "section": "02-manage-identities-and-governance",
    "topic": "Identity Management - Security Groups vs M365 Groups",
    "question": "Which group type in Entra ID is best suited for assigning RBAC roles and resource permissions?",
    "answer": "Security groups.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 19; MS Learn Manage Identities, Unit 6"
  },
  {
    "id": "p02-m02-06",
    "section": "02-manage-identities-and-governance",
    "topic": "Identity Management - Group Membership Types",
    "question": "What are the three membership types available for Microsoft Entra ID groups?",
    "answer": "Assigned (manual), Dynamic User, and Dynamic Device.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 20; MS Learn Manage Identities, Unit 6"
  },
  {
    "id": "p02-m02-07",
    "section": "02-manage-identities-and-governance",
    "topic": "Identity Management - Dynamic Group Query Evaluation",
    "question": "How are members added to or removed from a Dynamic User group in Microsoft Entra ID?",
    "answer": "Automatically evaluated by rules based on user object attributes (e.g., `(user.department -eq \"Sales\")`).",
    "source": "Exam Ref AZ-104, Ch. 1, p. 21; MS Learn Manage Identities, Unit 7"
  },
  {
    "id": "p02-m02-08",
    "section": "02-manage-identities-and-governance",
    "topic": "Identity Management - Group-Based Licensing",
    "question": "What is the benefit of group-based licensing in Microsoft Entra ID?",
    "answer": "Licenses (such as M365 or Entra P1) are automatically assigned or revoked as users join or leave the group.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 23; MS Learn Manage Identities, Unit 8"
  },
  {
    "id": "p02-m02-09",
    "section": "02-manage-identities-and-governance",
    "topic": "Identity Management - Group Nesting Limitation in RBAC",
    "question": "Does Azure RBAC support role assignments to nested groups?",
    "answer": "No, Azure role assignments only apply to direct group members; nested group members are not granted access.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 20"
  },
  {
    "id": "p02-m02-10",
    "section": "02-manage-identities-and-governance",
    "topic": "Identity Management - B2B Collaboration Guest Redirection",
    "question": "When an external partner user is invited via Entra B2B Collaboration, where does their primary authentication take place?",
    "answer": "In their home identity provider (e.g., their organization's Entra ID, Google, or Microsoft account).",
    "source": "Exam Ref AZ-104, Ch. 1, p. 14; MS Learn Manage Identities, Unit 5"
  },
  {
    "id": "p02-m02-11",
    "section": "02-manage-identities-and-governance",
    "topic": "Identity Management - User Principal Name (UPN) Structure",
    "question": "What two components compose a User Principal Name (UPN) in Microsoft Entra ID?",
    "answer": "The username prefix and the domain suffix, separated by an `@` symbol (e.g., `user@domain.com`).",
    "source": "MS Learn Manage Identities, Unit 2"
  },
  {
    "id": "p02-m02-12",
    "section": "02-manage-identities-and-governance",
    "topic": "Identity Management - Administrative Units (AUs)",
    "question": "What Entra ID resource allows delegating administrative control over a specific subset of users and groups without granting tenant-wide admin rights?",
    "answer": "Administrative Units (AUs).",
    "source": "Exam Ref AZ-104, Ch. 1, p. 25; MS Learn Manage Identities, Unit 9"
  },
  {
    "id": "p02-m03-01",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure Hierarchy - Management Groups Hierarchy Depth",
    "question": "What is the maximum supported hierarchy depth for Management Groups in Azure?",
    "answer": "Up to 6 levels of depth (excluding the Root Management Group).",
    "source": "Exam Ref AZ-104, Ch. 1, p. 29; MS Learn Architectural Components, Unit 4"
  },
  {
    "id": "p02-m03-02",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure Hierarchy - Root Management Group Name",
    "question": "What is the name of the top-level container automatically created in every tenant to govern all management groups and subscriptions?",
    "answer": "Tenant Root Group.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 30; MS Learn Architectural Components, Unit 4"
  },
  {
    "id": "p02-m03-03",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure Hierarchy - Management Groups Directory Limit",
    "question": "How many total Management Groups can be created within a single Microsoft Entra tenant?",
    "answer": "Up to 10,000 Management Groups.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 30; MS Learn Architectural Components, Unit 4"
  },
  {
    "id": "p02-m03-04",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure Hierarchy - Management Group Parent Assignment",
    "question": "Can a Management Group or subscription have more than one parent Management Group?",
    "answer": "No, each Management Group or subscription can have exactly one parent.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 30"
  },
  {
    "id": "p02-m03-05",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure Hierarchy - Four Levels of Scope",
    "question": "What are the four levels of management scope in Azure from broadest to most specific?",
    "answer": "Management Group -> Subscription -> Resource Group -> Resource.",
    "source": "MS Learn Architectural Components, Unit 2; Exam Ref AZ-104, Ch. 1, p. 28"
  },
  {
    "id": "p02-m03-06",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure Hierarchy - Resource Group Membership Rule",
    "question": "Can an individual Azure resource belong to more than one Resource Group at the same time?",
    "answer": "No, an Azure resource can only exist in exactly one Resource Group.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 35; MS Learn Architectural Components, Unit 5"
  },
  {
    "id": "p02-m03-07",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure Hierarchy - Resource Group Regional Distribution",
    "question": "Can a Resource Group contain resources located in different geographic regions than the Resource Group itself?",
    "answer": "Yes, resources inside a Resource Group can be located in any supported Azure region.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 35; MS Learn Architectural Components, Unit 5"
  },
  {
    "id": "p02-m03-08",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure Hierarchy - Resource Group Deletion Cascade",
    "question": "What happens to the resources inside a Resource Group when the Resource Group is deleted?",
    "answer": "All resources inside the Resource Group are permanently deleted.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 36"
  },
  {
    "id": "p02-m03-09",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure Hierarchy - Moving Resources Across Resource Groups",
    "question": "Can resources be moved from one Resource Group to another or to another subscription?",
    "answer": "Yes, supported resources can be moved between Resource Groups and between subscriptions without downtime.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 37"
  },
  {
    "id": "p02-m03-10",
    "section": "02-manage-identities-and-governance",
    "topic": "Resource Locks - Lock Types",
    "question": "What are the two types of resource locks supported in Azure Resource Manager?",
    "answer": "`CanNotDelete` (Delete lock) and `ReadOnly` (Read-only lock).",
    "source": "Exam Ref AZ-104, Ch. 1, p. 39; MS Learn Architectural Components, Unit 6"
  },
  {
    "id": "p02-m03-11",
    "section": "02-manage-identities-and-governance",
    "topic": "Resource Locks - CanNotDelete Behavior",
    "question": "What operations are allowed on a resource protected by a `CanNotDelete` lock?",
    "answer": "Authorized users can read and modify the resource, but cannot delete it.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 39"
  },
  {
    "id": "p02-m03-12",
    "section": "02-manage-identities-and-governance",
    "topic": "Resource Locks - ReadOnly Side Effects on Storage",
    "question": "Why does a `ReadOnly` lock on a storage account prevent users from listing account access keys?",
    "answer": "Because listing keys is a POST request that returns write-capable credentials, which the `ReadOnly` lock blocks.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 40"
  },
  {
    "id": "p02-m04-01",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure Policy - Core Purpose",
    "question": "What is the primary function of Azure Policy compared to Azure RBAC?",
    "answer": "Azure Policy governs resource properties, configurations, and compliance, whereas RBAC controls user actions and permissions.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 42; MS Learn Azure Policy, Unit 2"
  },
  {
    "id": "p02-m04-02",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure Policy - Definition vs Initiative",
    "question": "What is an Azure Policy Initiative (also called a Policy Set)?",
    "answer": "A collection of multiple policy definitions grouped together toward a single overarching compliance goal.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 44; MS Learn Azure Policy, Unit 3"
  },
  {
    "id": "p02-m04-03",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure Policy - Deny Effect",
    "question": "What happens when a resource deployment fails compliance with an Azure Policy having the `Deny` effect?",
    "answer": "The Resource Manager request is immediately rejected and the deployment fails.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 43; MS Learn Azure Policy, Unit 4"
  },
  {
    "id": "p02-m04-04",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure Policy - Audit Effect",
    "question": "Does an Azure Policy with the `Audit` effect block a non-compliant resource from being created?",
    "answer": "No, the resource is created, but a non-compliance warning is logged in the compliance dashboard.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 43"
  },
  {
    "id": "p02-m04-05",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure Policy - Append vs Modify Effect",
    "question": "Which Azure Policy effect adds defined fields or tags to a resource during creation or update?",
    "answer": "The `Append` effect (or `Modify` effect).",
    "source": "MS Learn Azure Policy, Unit 4; Exam Ref AZ-104, Ch. 1, p. 43"
  },
  {
    "id": "p02-m04-06",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure Policy - DeployIfNotExists Effect",
    "question": "What does an Azure Policy with the `DeployIfNotExists` effect do when a condition is met?",
    "answer": "It automatically deploys a related resource or extension (such as a Log Analytics agent) if it is missing.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 44; MS Learn Azure Policy, Unit 4"
  },
  {
    "id": "p02-m04-07",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure Policy - Remediation Tasks",
    "question": "How are existing non-compliant resources brought into compliance for `Modify` or `DeployIfNotExists` policies?",
    "answer": "By creating an Azure Policy Remediation Task, which uses a managed identity to remediate existing resources.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 47; MS Learn Azure Policy, Unit 5"
  },
  {
    "id": "p02-m04-08",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure Policy - Evaluation Triggers",
    "question": "When does Azure Policy automatically evaluate compliance on resources?",
    "answer": "During resource creation/update (PUT/PATCH), when a policy is assigned, and periodically every 24 hours.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 45"
  },
  {
    "id": "p02-m04-09",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure Policy - Exclusions Scope",
    "question": "Can an administrator exclude specific resource groups or resources from an assigned policy at a higher scope?",
    "answer": "Yes, by adding specific scopes to the 'Exclusions' list of the policy assignment.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 46; MS Learn Azure Policy, Unit 3"
  },
  {
    "id": "p02-m04-10",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure Policy - Scope Inheritance",
    "question": "If an Azure Policy is assigned at a Management Group, where is that policy enforced?",
    "answer": "Across all subscriptions, resource groups, and resources residing under that Management Group.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 45"
  },
  {
    "id": "p02-m04-11",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure Policy - Definition Structure",
    "question": "What JSON block inside an Azure Policy definition contains the `if`/`then` conditional rules?",
    "answer": "The `policyRule` block.",
    "source": "MS Learn Azure Policy, Unit 4"
  },
  {
    "id": "p02-m04-12",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure Policy - Disabled Effect",
    "question": "What is the purpose of setting a policy effect to `Disabled`?",
    "answer": "It stops the policy rule from evaluating or enforcing compliance without having to delete the assignment.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 44"
  },
  {
    "id": "p02-m05-01",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure RBAC - Three Elements of Role Assignment",
    "question": "What three elements are required to construct an Azure RBAC role assignment?",
    "answer": "A Security Principal (who), a Role Definition (what permissions), and a Scope (where).",
    "source": "Exam Ref AZ-104, Ch. 1, p. 48; MS Learn Secure Resources with RBAC, Unit 2"
  },
  {
    "id": "p02-m05-02",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure RBAC - Owner Role Permissions",
    "question": "What distinct permission differentiates the `Owner` role from the `Contributor` role in Azure RBAC?",
    "answer": "The `Owner` role can grant and manage access permissions (RBAC) to others, whereas `Contributor` cannot.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 49; MS Learn Secure Resources with RBAC, Unit 3"
  },
  {
    "id": "p02-m05-03",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure RBAC - Contributor Role Permissions",
    "question": "Can a user assigned the built-in `Contributor` role assign RBAC permissions to another user?",
    "answer": "No, `Contributor` has `Microsoft.Authorization/*/Write` excluded.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 49"
  },
  {
    "id": "p02-m05-04",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure RBAC - Reader Role Permissions",
    "question": "Can a user with the `Reader` role view the access keys of an Azure Storage account?",
    "answer": "No, viewing access keys is a management plane action that requires `listKeys` write permissions.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 50"
  },
  {
    "id": "p02-m05-05",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure RBAC - User Access Administrator Role",
    "question": "What is the primary function of the built-in `User Access Administrator` role?",
    "answer": "To manage user access and role assignments without granting management access to the resources themselves.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 50; MS Learn Secure Resources with RBAC, Unit 3"
  },
  {
    "id": "p02-m05-06",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure RBAC - Custom Role Definition Sections",
    "question": "Which properties in a custom role JSON definition define granted permissions, excluded permissions, and valid deployment targets?",
    "answer": "`Actions`, `NotActions`, and `AssignableScopes`.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 52; MS Learn Secure Resources with RBAC, Unit 4"
  },
  {
    "id": "p02-m05-07",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure RBAC - NotActions Behavior",
    "question": "Does listing an operation in `NotActions` act as a deny rule if the user is granted that permission via another role?",
    "answer": "No, `NotActions` simply subtracts permissions from `Actions`; it does NOT override permissions granted by another role.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 53"
  },
  {
    "id": "p02-m05-08",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure RBAC - Deny Assignments Priority",
    "question": "How do Azure Deny Assignments interact with RBAC allow permissions?",
    "answer": "Deny assignments take absolute precedence over allow role assignments.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 54; MS Learn Secure Resources with RBAC, Unit 2"
  },
  {
    "id": "p02-m05-09",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure RBAC - DataActions vs Actions",
    "question": "What is the difference between `Actions` and `DataActions` in an RBAC role definition?",
    "answer": "`Actions` apply to the control/management plane (e.g., creating a VM), while `DataActions` apply to data plane operations (e.g., reading blobs).",
    "source": "Exam Ref AZ-104, Ch. 1, p. 53"
  },
  {
    "id": "p02-m05-10",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure RBAC - Scope Inheritance Rule",
    "question": "If a user is assigned `Contributor` at the Subscription level, what role permissions do they have on a Resource Group in that subscription?",
    "answer": "They inherit full `Contributor` permissions on the Resource Group and all resources inside it.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 48"
  },
  {
    "id": "p02-m05-11",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure RBAC - Custom Roles AssignableScopes Limit",
    "question": "At which scopes can an Azure custom RBAC role be defined in `AssignableScopes`?",
    "answer": "At Management Groups, Subscriptions, or Resource Groups (cannot specify individual resources).",
    "source": "Exam Ref AZ-104, Ch. 1, p. 54"
  },
  {
    "id": "p02-m05-12",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure RBAC - Elevated Access Global Admin",
    "question": "How can a Global Administrator in Entra ID gain access to manage all Azure subscriptions in their tenant?",
    "answer": "By turning on the 'Access management for Azure resources' switch, which grants `User Access Administrator` at the Root Management Group.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 51"
  },
  {
    "id": "p02-m06-01",
    "section": "02-manage-identities-and-governance",
    "topic": "Entra SSPR - Target Group Scope",
    "question": "Can Self-Service Password Reset (SSPR) be enabled for a select group of pilot users in Microsoft Entra ID?",
    "answer": "Yes, SSPR scope options are 'None', 'Selected' (specific group), or 'All'.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 56; MS Learn SSPR, Unit 3"
  },
  {
    "id": "p02-m06-02",
    "section": "02-manage-identities-and-governance",
    "topic": "Entra SSPR - Password Writeback Direction",
    "question": "What is the purpose of Microsoft Entra SSPR Password Writeback?",
    "answer": "It writes password changes made in the cloud back to on-premises Active Directory in real time via Entra Connect.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 58; MS Learn SSPR, Unit 4"
  },
  {
    "id": "p02-m06-03",
    "section": "02-manage-identities-and-governance",
    "topic": "Entra SSPR - Minimum Methods Required",
    "question": "What are the configuration choices for the number of authentication methods required for a user to reset their password via SSPR?",
    "answer": "Either 1 method or 2 methods.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 57; MS Learn SSPR, Unit 3"
  },
  {
    "id": "p02-m06-04",
    "section": "02-manage-identities-and-governance",
    "topic": "Entra SSPR - Supported Authentication Methods",
    "question": "Name three supported authentication methods for user verification in Entra SSPR.",
    "answer": "Mobile app notification/code (Microsoft Authenticator), SMS text message, and Security questions (or email).",
    "source": "Exam Ref AZ-104, Ch. 1, p. 57; MS Learn SSPR, Unit 3"
  },
  {
    "id": "p02-m06-05",
    "section": "02-manage-identities-and-governance",
    "topic": "Entra SSPR - Re-registration Prompt Period",
    "question": "How often can administrators require users to reconfirm their authentication information for SSPR?",
    "answer": "Every 0 to 730 days (typically configured for 180 or 365 days).",
    "source": "Exam Ref AZ-104, Ch. 1, p. 58; MS Learn SSPR, Unit 3"
  },
  {
    "id": "p02-m06-06",
    "section": "02-manage-identities-and-governance",
    "topic": "Entra SSPR - Admin Account Password Policy",
    "question": "How many authentication methods are administrators required to provide by default when resetting passwords, regardless of SSPR policy?",
    "answer": "Two authentication methods (enforced by Microsoft default administrator policy).",
    "source": "Exam Ref AZ-104, Ch. 1, p. 57"
  },
  {
    "id": "p02-m06-07",
    "section": "02-manage-identities-and-governance",
    "topic": "Entra SSPR - Notification Options",
    "question": "Which two notification settings can be toggled on when a user successfully resets their password via SSPR?",
    "answer": "'Notify users on password resets?' and 'Notify all admins when other admins reset their password?'.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 58; MS Learn SSPR, Unit 3"
  },
  {
    "id": "p02-m06-08",
    "section": "02-manage-identities-and-governance",
    "topic": "Entra SSPR - Combined Registration Experience",
    "question": "What is the benefit of the Combined Security Information Registration experience in Microsoft Entra ID?",
    "answer": "Users register once for both Multi-Factor Authentication (MFA) and Self-Service Password Reset (SSPR).",
    "source": "Exam Ref AZ-104, Ch. 1, p. 58; MS Learn SSPR, Unit 2"
  },
  {
    "id": "p02-m06-09",
    "section": "02-manage-identities-and-governance",
    "topic": "Entra SSPR - Security Questions Minimum Defined",
    "question": "If Security Questions are configured as an SSPR method, what is the minimum number of questions a user must register and answer to reset?",
    "answer": "Users must register between 3 and 5 questions, and answer between 3 and 5 questions.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 57"
  },
  {
    "id": "p02-m06-10",
    "section": "02-manage-identities-and-governance",
    "topic": "Entra SSPR - Password Writeback Prerequisite Service",
    "question": "Which on-premises component must have the Password Writeback feature enabled in its configuration wizard?",
    "answer": "Microsoft Entra Connect Sync.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 59; MS Learn SSPR, Unit 4"
  },
  {
    "id": "p02-m06-11",
    "section": "02-manage-identities-and-governance",
    "topic": "Entra SSPR - Account Unlock Capability",
    "question": "Can users unlock their on-premises Active Directory accounts via SSPR without changing their password?",
    "answer": "Yes, if 'Allow users to unlock account without resetting their password' is set to Yes.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 59"
  },
  {
    "id": "p02-m06-12",
    "section": "02-manage-identities-and-governance",
    "topic": "Entra SSPR - Free Edition Capability",
    "question": "What limited SSPR functionality is available with the Microsoft Entra ID Free edition?",
    "answer": "Password reset for cloud-only users only (no on-premises writeback).",
    "source": "Exam Ref AZ-104, Ch. 1, p. 4"
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
  },
  {
    "id": "p02-m03-13",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure Cost Management - Budget Alert Types",
    "question": "What two condition types can trigger an Azure Cost Management budget alert?",
    "answer": "1. Actual spending (current accrued spend crosses threshold); 2. Forecasted spending (projected spend will cross threshold by period end).",
    "source": "Exam Ref AZ-104, Ch. 1, p. 35; MS Learn Manage Subscriptions, Unit 4"
  },
  {
    "id": "p02-m03-14",
    "section": "02-manage-identities-and-governance",
    "topic": "Azure Advisor - Cost Recommendations",
    "question": "What key cost-reduction suggestions does Azure Advisor produce for compute resources?",
    "answer": "Shutting down or resizing underutilized/idle virtual machines, and purchasing 1- or 3-year Azure Reserved Instances.",
    "source": "Exam Ref AZ-104, Ch. 1, pp. 36–37; MS Learn Manage Subscriptions, Unit 5"
  },
  {
    "id": "p02-m04-15",
    "section": "02-manage-identities-and-governance",
    "topic": "Resource Tags - Inheritance Rule",
    "question": "Do resource tags applied to a Resource Group automatically inherit down to child resources?",
    "answer": "No. Tags do not automatically inherit. An Azure Policy with `Modify` or `Append` effect is required to propagate tags.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 33; MS Learn Azure Governance, Unit 4"
  },
  {
    "id": "p02-m03-15",
    "section": "02-manage-identities-and-governance",
    "topic": "Resource Groups - Moving Virtual Machines",
    "question": "When moving a VM to another resource group, what dependent resources must be moved simultaneously?",
    "answer": "The virtual machine, its network interface card (NIC), and all attached OS and data managed disks.",
    "source": "Exam Ref AZ-104, Ch. 1, p. 32; MS Learn Azure Governance, Unit 3"
  },
  {
    "id": "p03-m01-01",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Virtual Networks - Reserved IP Addresses Count",
    "question": "How many IP addresses does Azure reserve in every subnet?",
    "answer": "5 IP addresses.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 217; MS Learn Configure VNets, Unit 2"
  },
  {
    "id": "p03-m01-02",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Virtual Networks - Reserved IP Addresses Allocation",
    "question": "In a subnet 10.0.0.0/24, which five specific IP addresses are reserved by Azure and for what purposes?",
    "answer": "10.0.0.0 (Network), 10.0.0.1 (Default Gateway), 10.0.0.2 & 10.0.0.3 (Azure DNS mapping), and 10.0.0.255 (Broadcast).",
    "source": "Exam Ref AZ-104, Ch. 4, pp. 217-219; MS Learn Configure VNets, Unit 2"
  },
  {
    "id": "p03-m01-03",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Virtual Networks - Usable IP Formula",
    "question": "How do you calculate the usable host IP address capacity of an Azure subnet with prefix length /N?",
    "answer": "$2^{(32 - N)} - 5$",
    "source": "Exam Ref AZ-104, Ch. 4, p. 218"
  },
  {
    "id": "p03-m01-04",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Virtual Networks - Minimum Subnet Size",
    "question": "What is the smallest supported subnet size in Azure Virtual Networks?",
    "answer": "/29 (which provides 8 total IPs and 3 usable host IPs).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 218; MS Learn Configure VNets, Unit 2"
  },
  {
    "id": "p03-m01-05",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Virtual Networks - Private IP Allocation Methods",
    "question": "What are the two allocation methods for private IP addresses assigned to network interfaces (NICs)?",
    "answer": "Dynamic (assigned via Azure DHCP lease) and Static (reserved address from subnet pool).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 220; MS Learn Configure VNets, Unit 3"
  },
  {
    "id": "p03-m01-06",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Virtual Networks - Static Private IP Assignment Location",
    "question": "Where should a static private IP address be configured for an Azure VM: inside the guest OS or on the Azure NIC resource?",
    "answer": "On the Azure NIC resource in the Azure portal/CLI (never configure a static IP directly in the guest OS).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 221"
  },
  {
    "id": "p03-m01-07",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Virtual Networks - Standard Public IP Security",
    "question": "What is the default inbound traffic posture for a Standard SKU Public IP address in Azure?",
    "answer": "Closed (blocked by default) until explicitly allowed by a Network Security Group.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 223; MS Learn Configure VNets, Unit 4"
  },
  {
    "id": "p03-m01-08",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Virtual Networks - Service Endpoints Purpose",
    "question": "What is the primary function of Virtual Network Service Endpoints?",
    "answer": "To route traffic to Azure PaaS services over the private Azure backbone using optimal routes while restricting PaaS access to specific subnets.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 225; MS Learn Configure VNets, Unit 5"
  },
  {
    "id": "p03-m01-09",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Virtual Networks - Private Endpoint Difference",
    "question": "How does an Azure Private Endpoint differ fundamentally from a Service Endpoint?",
    "answer": "A Private Endpoint assigns a dedicated private IP address from your subnet to the PaaS resource via Azure Private Link.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 226; MS Learn Configure VNets, Unit 5"
  },
  {
    "id": "p03-m01-10",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Virtual Networks - Default DNS Server",
    "question": "What internal IP address provides default recursive Azure-provided DNS resolution for VMs?",
    "answer": "168.63.129.16",
    "source": "Exam Ref AZ-104, Ch. 4, p. 222; MS Learn Configure VNets, Unit 3"
  },
  {
    "id": "p03-m01-11",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Virtual Networks - Custom DNS Server Setting Scope",
    "question": "Where can custom DNS servers be specified so that all VMs in a virtual network use them automatically?",
    "answer": "In the Virtual Network DNS settings (inherited by all subnets and NICs).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 222; MS Learn Configure VNets, Unit 3"
  },
  {
    "id": "p03-m01-12",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Virtual Networks - Subnet Delegation",
    "question": "What is Azure Subnet Delegation?",
    "answer": "Granting exclusive management of a subnet to a dedicated Azure PaaS service (e.g., Azure SQL Managed Instance or App Service VNet integration).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 224; MS Learn Configure VNets, Unit 2"
  },
  {
    "id": "p03-m02-01",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Network Security Groups - Priority Range",
    "question": "What is the numerical range for Network Security Group (NSG) rule priorities?",
    "answer": "100 to 4096 (lower numbers take precedence).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 242; MS Learn Configure NSGs, Unit 2"
  },
  {
    "id": "p03-m02-02",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Network Security Groups - Rule Evaluation Stop",
    "question": "What happens when an inbound packet matches an NSG rule?",
    "answer": "The rule action (Allow or Deny) is immediately applied, and rule processing stops.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 242; MS Learn Configure NSGs, Unit 2"
  },
  {
    "id": "p03-m02-03",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Network Security Groups - Default Inbound Rules",
    "question": "Name the three default inbound rules present in every Azure NSG.",
    "answer": "`AllowVnetInBound` (priority 65000), `AllowAzureLoadBalancerInBound` (priority 65001), and `DenyAllInBound` (priority 65500).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 243; MS Learn Configure NSGs, Unit 3"
  },
  {
    "id": "p03-m02-04",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Network Security Groups - Default Outbound Rules",
    "question": "Name the three default outbound rules present in every Azure NSG.",
    "answer": "`AllowVnetOutBound` (priority 65000), `AllowInternetOutBound` (priority 65001), and `DenyAllOutBound` (priority 65500).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 243; MS Learn Configure NSGs, Unit 3"
  },
  {
    "id": "p03-m02-05",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Network Security Groups - Association Scopes",
    "question": "To which two resource types can an NSG be directly associated?",
    "answer": "A Subnet and a Network Interface (NIC).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 244; MS Learn Configure NSGs, Unit 2"
  },
  {
    "id": "p03-m02-06",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Network Security Groups - Inbound Evaluation Order",
    "question": "When both a subnet NSG and a NIC NSG are present, in what order are inbound traffic rules evaluated?",
    "answer": "Subnet NSG is evaluated first; if allowed, NIC NSG is evaluated second.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 245; MS Learn Configure NSGs, Unit 4"
  },
  {
    "id": "p03-m02-07",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Network Security Groups - Outbound Evaluation Order",
    "question": "When both a subnet NSG and a NIC NSG are present, in what order are outbound traffic rules evaluated?",
    "answer": "NIC NSG is evaluated first; if allowed, Subnet NSG is evaluated second.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 245; MS Learn Configure NSGs, Unit 4"
  },
  {
    "id": "p03-m02-08",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Network Security Groups - Service Tags Purpose",
    "question": "What is an Azure Service Tag in an NSG rule?",
    "answer": "A pre-managed label representing a group of IP address prefixes for a specific Azure service (e.g., `AzureStorage`, `Sql`).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 246; MS Learn Configure NSGs, Unit 5"
  },
  {
    "id": "p03-m02-09",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Network Security Groups - VirtualNetwork Service Tag Scope",
    "question": "What IP address ranges are included in the `VirtualNetwork` service tag?",
    "answer": "The local VNet address space, all peered VNets, and connected on-premises networks via VPN/ExpressRoute.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 246"
  },
  {
    "id": "p03-m02-10",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Application Security Groups (ASGs) - Definition",
    "question": "What is an Application Security Group (ASG)?",
    "answer": "A grouping of network interfaces based on application role (e.g., WebServers, DBServers) used as source/destination in NSG rules.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 247; MS Learn Configure NSGs, Unit 6"
  },
  {
    "id": "p03-m02-11",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Application Security Groups (ASGs) - VNet Boundary",
    "question": "Can an Application Security Group include network interfaces located in different virtual networks?",
    "answer": "No, all NICs assigned to an ASG must reside in the exact same Virtual Network.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 247"
  },
  {
    "id": "p03-m02-12",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Network Security Groups - Stateful Nature",
    "question": "Are NSG security rules stateful or stateless?",
    "answer": "Stateful; if an inbound connection is allowed, return outbound traffic is automatically permitted.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 242; MS Learn Configure NSGs, Unit 2"
  },
  {
    "id": "p03-m03-01",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Azure DNS - Hosting vs Registrar",
    "question": "Can you purchase domain names directly through Azure DNS?",
    "answer": "No, Azure DNS is a hosting service for DNS zones; domain registration must be done via a domain registrar (or App Service Domains).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 232; MS Learn Host Domain Azure DNS, Unit 2"
  },
  {
    "id": "p03-m03-02",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Azure DNS - Name Server Delegation",
    "question": "How do you delegate an authoritative DNS zone to Azure DNS at your domain registrar?",
    "answer": "By updating the registrar's NS records to point to the four Azure DNS name servers assigned to the zone.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 233; MS Learn Host Domain Azure DNS, Unit 3"
  },
  {
    "id": "p03-m03-03",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Azure DNS - Alias Records Purpose",
    "question": "What is an Azure DNS Alias Record?",
    "answer": "A record set that dynamically points directly to an Azure resource (e.g., Public IP, Front Door, or Traffic Manager) and updates automatically.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 235; MS Learn Host Domain Azure DNS, Unit 4"
  },
  {
    "id": "p03-m03-04",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Azure DNS - Apex CNAME Restriction Bypass",
    "question": "How does an Azure DNS Alias record solve the DNS apex (root domain) CNAME limitation?",
    "answer": "It allows alias A/AAAA records at the zone apex (`@`) to point directly to Azure resources without violating RFC CNAME rules.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 235"
  },
  {
    "id": "p03-m03-05",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Azure Private DNS - Registration vs Resolution VNet",
    "question": "What is the difference between a Registration VNet and a Resolution VNet linked to a Private DNS Zone?",
    "answer": "A Registration VNet automatically registers and updates DNS hostnames for its VMs; a Resolution VNet resolves records but does not auto-register.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 236; MS Learn Host Domain Azure DNS, Unit 5"
  },
  {
    "id": "p03-m03-06",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Azure Private DNS - Auto-Registration Limit",
    "question": "How many Private DNS zones can a single Virtual Network be linked to as an auto-registration virtual network?",
    "answer": "Only one Private DNS zone.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 237"
  },
  {
    "id": "p03-m03-07",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Azure Private DNS - Split-Horizon DNS",
    "question": "What is Split-Horizon DNS in Azure?",
    "answer": "Using the same domain name for both a public and private DNS zone, where internal clients resolve internal IPs and public clients resolve public IPs.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 238; MS Learn Host Domain Azure DNS, Unit 5"
  },
  {
    "id": "p03-m03-08",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Azure DNS - Record Types Supported",
    "question": "Name five standard DNS record types supported by Azure DNS.",
    "answer": "A, AAAA, CNAME, MX, and TXT (as well as PTR, SRV, and SOA).",
    "source": "MS Learn Host Domain Azure DNS, Unit 2"
  },
  {
    "id": "p03-m03-09",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Azure DNS - CNAME Pointing to Another CNAME",
    "question": "Can a CNAME record set in Azure DNS coexist with other records of a different type for the same name?",
    "answer": "No, standard DNS RFCs prevent a CNAME from coexisting with other records for the same hostname.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 234"
  },
  {
    "id": "p03-m03-10",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Azure Private DNS - Cross-Subscription Linking",
    "question": "Can an Azure Private DNS Zone be linked to virtual networks in different subscriptions and tenants?",
    "answer": "Yes, cross-subscription virtual network linking is supported.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 237"
  },
  {
    "id": "p03-m03-11",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Azure DNS - Anycast Networking",
    "question": "How does Azure DNS achieve low latency and high availability globally?",
    "answer": "Through Anycast networking across Microsoft's global datacenter footprint.",
    "source": "MS Learn Host Domain Azure DNS, Unit 2"
  },
  {
    "id": "p03-m03-12",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Azure DNS - TTL Definition",
    "question": "What does the Time to Live (TTL) setting on a DNS record control?",
    "answer": "How long DNS resolvers and client devices cache the record before querying the authoritative name server again.",
    "source": "MS Learn Host Domain Azure DNS, Unit 3"
  },
  {
    "id": "p03-m04-01",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "VNet Peering - Address Space Overlap Rule",
    "question": "Can two Azure Virtual Networks be peered if their IP address spaces overlap?",
    "answer": "No, peered VNets must have completely non-overlapping address spaces.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 249; MS Learn Configure VNet Peering, Unit 2"
  },
  {
    "id": "p03-m04-02",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "VNet Peering - Local vs Global Peering",
    "question": "What is the difference between Virtual Network Peering and Global Virtual Network Peering?",
    "answer": "VNet Peering connects VNets within the same Azure region; Global VNet Peering connects VNets across different Azure regions.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 249; MS Learn Configure VNet Peering, Unit 2"
  },
  {
    "id": "p03-m04-03",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "VNet Peering - Non-Transitive Characteristic",
    "question": "If VNet A is peered to VNet B, and VNet B is peered to VNet C, can VNet A communicate with VNet C by default?",
    "answer": "No, VNet peering is non-transitive; traffic cannot pass through VNet B without a routing appliance or gateway transit.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 250; MS Learn Configure VNet Peering, Unit 3"
  },
  {
    "id": "p03-m04-04",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "VNet Peering - Both Directions Requirement",
    "question": "For peering between VNet 1 and VNet 2 to be operational, what must be created?",
    "answer": "Two peering links must be configured: one from VNet 1 to VNet 2, and one from VNet 2 to VNet 1 (both status 'Connected').",
    "source": "Exam Ref AZ-104, Ch. 4, p. 251; MS Learn Configure VNet Peering, Unit 3"
  },
  {
    "id": "p03-m04-05",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "VNet Peering - Gateway Transit Settings",
    "question": "Which two peering settings allow a spoke VNet to share a VPN/ExpressRoute gateway located in a hub VNet?",
    "answer": "`Allow gateway transit` on the hub VNet peering, and `Use remote gateways` on the spoke VNet peering.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 252; MS Learn Configure VNet Peering, Unit 4"
  },
  {
    "id": "p03-m04-06",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "VNet Peering - Gateway per VNet Restriction",
    "question": "Can a spoke VNet configure 'Use remote gateways' if it already has its own Virtual Network Gateway deployed?",
    "answer": "No, a VNet cannot use a remote gateway if it already has a local virtual network gateway.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 252"
  },
  {
    "id": "p03-m04-07",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "VNet Peering - Underlying Backbone Routing",
    "question": "Does traffic between peered VNets traverse the public internet?",
    "answer": "No, peering traffic flows entirely across the private Microsoft global backbone network.",
    "source": "MS Learn Configure VNet Peering, Unit 2"
  },
  {
    "id": "p03-m04-08",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "VNet Peering - Bandwidth and Performance",
    "question": "Does VNet peering introduce encryption overhead or gateway bottleneck latency?",
    "answer": "No, traffic is routed directly between VM NICs at line rate without passing through a gateway bottleneck.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 250"
  },
  {
    "id": "p03-m04-09",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "VNet Peering - Cross-Subscription Support",
    "question": "Can virtual networks in different Azure subscriptions and different Microsoft Entra tenants be peered?",
    "answer": "Yes, cross-subscription and cross-tenant VNet peering are supported.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 251"
  },
  {
    "id": "p03-m04-10",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "VNet Peering - Address Space Expansion Sync",
    "question": "What must you do to an existing VNet peering link after resizing or adding a new address prefix to one of the VNets?",
    "answer": "Sync the peering link so the new address ranges are learned by the peered network.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 253"
  },
  {
    "id": "p03-m04-11",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "VNet Peering - Allow Forwarded Traffic Setting",
    "question": "What is the purpose of the 'Allow forwarded traffic' setting in VNet peering?",
    "answer": "It allows traffic originating from outside the peered VNet (forwarded by a Network Virtual Appliance) to enter the destination VNet.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 253; MS Learn Configure VNet Peering, Unit 3"
  },
  {
    "id": "p03-m04-12",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "VNet Peering - Downtime During Creation",
    "question": "Does creating a VNet peering link cause downtime for virtual machines in either network?",
    "answer": "No, peering creation incurs zero downtime.",
    "source": "MS Learn Configure VNet Peering, Unit 2"
  },
  {
    "id": "p03-m05-01",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Routing & UDR - Default System Routes",
    "question": "What are Azure System Routes?",
    "answer": "Default routes automatically created by Azure for every subnet to enable communication within the VNet, to the Internet, and across gateways.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 255; MS Learn Control Traffic with Routes, Unit 2"
  },
  {
    "id": "p03-m05-02",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Routing & UDR - Longest Prefix Match (LPM)",
    "question": "When multiple routes match a packet's destination IP, which route does Azure select?",
    "answer": "The route with the Longest Prefix Match (most specific subnet mask).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 256; MS Learn Control Traffic with Routes, Unit 2"
  },
  {
    "id": "p03-m05-03",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Routing & UDR - User-Defined Route (UDR) Override",
    "question": "How do User-Defined Routes (UDRs) interact with default Azure system routes for identical address prefixes?",
    "answer": "A UDR takes precedence over an identical system route.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 256; MS Learn Control Traffic with Routes, Unit 3"
  },
  {
    "id": "p03-m05-04",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Routing & UDR - Next Hop Types Available",
    "question": "Name four valid next hop types when creating a User-Defined Route.",
    "answer": "Virtual appliance, Virtual network gateway, Internet, and None (drop traffic).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 257; MS Learn Control Traffic with Routes, Unit 3"
  },
  {
    "id": "p03-m05-05",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Routing & UDR - Next Hop None Function",
    "question": "What is the effect of setting a route's next hop type to 'None'?",
    "answer": "It acts as a black hole, immediately dropping all packets sent to that destination prefix.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 257"
  },
  {
    "id": "p03-m05-06",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Routing & UDR - Force Tunneling Destination Prefix",
    "question": "What destination address prefix is used in a UDR to force all outbound Internet traffic through an NVA or on-premises gateway?",
    "answer": "`0.0.0.0/0` (the default route).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 258; MS Learn Control Traffic with Routes, Unit 3"
  },
  {
    "id": "p03-m05-07",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Routing & UDR - IP Forwarding Prerequisite on NVA",
    "question": "What setting must be enabled on the network interface (NIC) of an Azure VM acting as a Network Virtual Appliance (NVA)?",
    "answer": "Enable IP forwarding (`ipForwarding = true`).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 259; MS Learn Control Traffic with Routes, Unit 4"
  },
  {
    "id": "p03-m05-08",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Routing & UDR - Route Table Association Scope",
    "question": "To which resource level is an Azure Route Table directly associated?",
    "answer": "To one or more subnets.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 257; MS Learn Control Traffic with Routes, Unit 3"
  },
  {
    "id": "p03-m05-09",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Routing & UDR - BGP Route Propagation Toggle",
    "question": "What happens when you disable 'Propagate gateway routes' on a subnet route table?",
    "answer": "It prevents on-premises BGP learned routes from being injected into that subnet.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 260; MS Learn Control Traffic with Routes, Unit 4"
  },
  {
    "id": "p03-m05-10",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Routing & UDR - Route Tie-Breaking Hierarchy",
    "question": "When destination prefixes match identically, in what order does Azure tie-break route selection between UDR, BGP, and System routes?",
    "answer": "1. User-Defined Route (UDR) -> 2. BGP route (ExpressRoute/VPN) -> 3. System route.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 256"
  },
  {
    "id": "p03-m05-11",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Routing & UDR - Effective Routes Verification",
    "question": "Where in the Azure portal can an administrator view the calculated combination of system routes, UDRs, and BGP routes active on a VM?",
    "answer": "Under the VM's Network Interface -> 'Effective routes' tab.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 261; MS Learn Control Traffic with Routes, Unit 5"
  },
  {
    "id": "p03-m05-12",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Routing & UDR - GatewaySubnet UDR Limitation",
    "question": "Can you attach a User-Defined Route table to the `GatewaySubnet`?",
    "answer": "Yes, but it cannot contain a route with a next hop type of Virtual network gateway.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 260"
  },
  {
    "id": "p03-m06-01",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Azure Load Balancer - OSI Layer Operation",
    "question": "At which layer of the OSI model does Azure Load Balancer operate?",
    "answer": "Layer 4 (Transport layer - TCP and UDP).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 263; MS Learn Intro Load Balancer, Unit 2"
  },
  {
    "id": "p03-m06-02",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Azure Load Balancer - Public vs Internal",
    "question": "What is the difference between a Public Load Balancer and an Internal Load Balancer in Azure?",
    "answer": "A Public Load Balancer has a public IP and routes internet traffic; an Internal Load Balancer has a private IP and routes traffic inside a VNet.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 264; MS Learn Intro Load Balancer, Unit 2"
  },
  {
    "id": "p03-m06-03",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Azure Load Balancer - Standard SKU Security Posture",
    "question": "What is the inbound network security requirement for backend VMs behind a Standard Load Balancer?",
    "answer": "An NSG must be applied to explicitly allow desired traffic, as Standard Load Balancer is closed by default.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 266; MS Learn Intro Load Balancer, Unit 3"
  },
  {
    "id": "p03-m06-04",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Azure Load Balancer - Distribution Hash Algorithm",
    "question": "What is the default 5-tuple hash used by Azure Load Balancer to distribute traffic?",
    "answer": "Source IP, Source port, Destination IP, Destination port, and Protocol.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 267; MS Learn Intro Load Balancer, Unit 3"
  },
  {
    "id": "p03-m06-05",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Azure Load Balancer - Session Persistence Modes",
    "question": "Which session persistence modes are supported in Azure Load Balancer to bind a client to a specific backend instance?",
    "answer": "None (5-tuple), Client IP (2-tuple: source IP, destination IP), and Client IP and Protocol (3-tuple).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 267; MS Learn Intro Load Balancer, Unit 3"
  },
  {
    "id": "p03-m06-06",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Azure Load Balancer - Health Probe Types",
    "question": "What three probe protocols does Azure Load Balancer support to determine backend node health?",
    "answer": "TCP, HTTP, and HTTPS.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 268; MS Learn Intro Load Balancer, Unit 4"
  },
  {
    "id": "p03-m06-07",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Azure Load Balancer - Unhealthy Probe Threshold",
    "question": "What happens when a backend VM fails to respond to consecutive health probes across the configured threshold?",
    "answer": "The load balancer marks the VM unhealthy and stops routing new flows to that instance.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 268"
  },
  {
    "id": "p03-m06-08",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Azure Load Balancer - HA Ports Feature",
    "question": "What is the HA Ports feature in an Azure Standard Internal Load Balancer?",
    "answer": "A rule that load-balances all TCP and UDP traffic arriving on all ports simultaneously (port 0).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 269; MS Learn Intro Load Balancer, Unit 3"
  },
  {
    "id": "p03-m06-09",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Azure Load Balancer - Inbound NAT Rules Purpose",
    "question": "What is the purpose of an Inbound NAT Rule in Azure Load Balancer?",
    "answer": "To map a specific frontend port directly to a specific backend VM (e.g., frontend port 50001 to VM1 RDP port 3389).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 270; MS Learn Intro Load Balancer, Unit 4"
  },
  {
    "id": "p03-m06-10",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Azure Load Balancer - Floating IP (Direct Server Return)",
    "question": "When is Floating IP (Direct Server Return) typically required on an Azure Load Balancer rule?",
    "answer": "When using SQL Server Always On Availability Groups or clustering where backend servers share a virtual IP.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 271"
  },
  {
    "id": "p03-m06-11",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Azure Load Balancer - Outbound Rules",
    "question": "What capability do Outbound Rules provide in Standard Public Load Balancer?",
    "answer": "They configure dedicated Source NAT (SNAT) IP addresses and port allocation for outbound internet traffic.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 271; MS Learn Intro Load Balancer, Unit 4"
  },
  {
    "id": "p03-m06-12",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Azure Load Balancer - Standard SKU Backend Pool Limit",
    "question": "What is the backend pool instance capacity of a Standard Load Balancer compared to Basic?",
    "answer": "Up to 1,000 backend instances (compared to 300 for Basic).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 266"
  },
  {
    "id": "p03-m07-01",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Application Gateway - OSI Layer Operation",
    "question": "At which layer of the OSI model does Azure Application Gateway operate?",
    "answer": "Layer 7 (Application layer - HTTP, HTTPS, HTTP/2, and WebSocket).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 274; MS Learn Intro App Gateway, Unit 2"
  },
  {
    "id": "p03-m07-02",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Application Gateway - URL Path-Based Routing",
    "question": "What is URL path-based routing in Application Gateway?",
    "answer": "Routing incoming HTTP requests to different backend pools based on the URL path (e.g., `/images/*` to Pool A, `/videos/*` to Pool B).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 275; MS Learn Intro App Gateway, Unit 3"
  },
  {
    "id": "p03-m07-03",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Application Gateway - Multi-Site Hosting",
    "question": "What is multi-site hosting on an Application Gateway?",
    "answer": "Hosting multiple web applications with distinct host headers (e.g., `contoso.com` and `fabrikam.com`) on the same gateway.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 276; MS Learn Intro App Gateway, Unit 3"
  },
  {
    "id": "p03-m07-04",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Application Gateway - SSL/TLS Termination",
    "question": "What is SSL/TLS termination on Azure Application Gateway?",
    "answer": "Decrypting incoming HTTPS traffic at the gateway so that backend servers do not bear cryptographic decryption overhead.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 277; MS Learn Intro App Gateway, Unit 3"
  },
  {
    "id": "p03-m07-05",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Application Gateway - Cookie-Based Session Affinity",
    "question": "How does Application Gateway maintain user session affinity to the same backend server?",
    "answer": "By injecting a gateway-managed affinity cookie (`ApplicationGatewayAffinity`) into the user's browser response.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 278; MS Learn Intro App Gateway, Unit 3"
  },
  {
    "id": "p03-m07-06",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Application Gateway - Web Application Firewall (WAF) SKU",
    "question": "What additional security protection does the WAF SKU provide on Application Gateway?",
    "answer": "Centralized Layer 7 protection against OWASP Top 10 vulnerabilities (SQL injection, cross-site scripting, etc.).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 278; MS Learn Intro App Gateway, Unit 4"
  },
  {
    "id": "p03-m07-07",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Application Gateway - WAF Modes",
    "question": "What are the two operational modes of Azure WAF on Application Gateway?",
    "answer": "Detection mode (logs threats without blocking) and Prevention mode (actively blocks malicious requests).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 279; MS Learn Intro App Gateway, Unit 4"
  },
  {
    "id": "p03-m07-08",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Application Gateway - Dedicated Subnet Requirement",
    "question": "Can Azure Application Gateway share its subnet with virtual machines or other workloads?",
    "answer": "No, Application Gateway requires a dedicated subnet containing only gateway instances.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 275; MS Learn Intro App Gateway, Unit 2"
  },
  {
    "id": "p03-m07-09",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Application Gateway - v2 SKU Autoscaling",
    "question": "What performance and scaling capability was introduced with Application Gateway v2 SKUs?",
    "answer": "Autoscaling (automatically scaling capacity units based on real-time traffic volume) and zone redundancy.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 280; MS Learn Intro App Gateway, Unit 2"
  },
  {
    "id": "p03-m07-10",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Application Gateway - Backend Pool Target Types",
    "question": "Name three target types that can be included in an Application Gateway backend pool.",
    "answer": "NICs/IP addresses, Virtual Machine Scale Sets, FQDNs, or Azure App Service.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 276"
  },
  {
    "id": "p03-m07-11",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Application Gateway - Custom Error Pages",
    "question": "Which HTTP error codes can be overridden with custom branded error pages on Application Gateway?",
    "answer": "HTTP 403 (Forbidden) and HTTP 502 (Bad Gateway).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 281"
  },
  {
    "id": "p03-m07-12",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Application Gateway - URL Redirect Capability",
    "question": "Can Application Gateway redirect incoming HTTP requests automatically to HTTPS without hitting backend servers?",
    "answer": "Yes, using listener redirection rules directly on the gateway.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 277; MS Learn Intro App Gateway, Unit 3"
  },
  {
    "id": "p03-m08-01",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Network Watcher - IP Flow Verify Purpose",
    "question": "What is the purpose of the Network Watcher 'IP flow verify' tool?",
    "answer": "It tests whether a packet is allowed or denied based on NSG 5-tuple parameters, and indicates which specific rule applied.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 284; MS Learn Intro Network Watcher, Unit 2"
  },
  {
    "id": "p03-m08-02",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Network Watcher - Next Hop Tool Purpose",
    "question": "What diagnostic check does the Network Watcher 'Next hop' tool perform?",
    "answer": "It tests the routing path for a VM and determines whether traffic is directed to an expected NVA, gateway, or internet route.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 285; MS Learn Intro Network Watcher, Unit 2"
  },
  {
    "id": "p03-m08-03",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Network Watcher - NSG Flow Logs Data Destination",
    "question": "Where does Network Watcher store raw NSG flow logs?",
    "answer": "In an Azure Storage Account (in JSON format).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 287; MS Learn Intro Network Watcher, Unit 3"
  },
  {
    "id": "p03-m08-04",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Network Watcher - Traffic Analytics Requirement",
    "question": "What service must be linked to NSG flow logs to enable Traffic Analytics visual dashboards?",
    "answer": "An Azure Log Analytics Workspace.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 288; MS Learn Intro Network Watcher, Unit 3"
  },
  {
    "id": "p03-m08-05",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Network Watcher - Packet Capture Output Format",
    "question": "What standard file format does Network Watcher Packet Capture produce for analysis in Wireshark?",
    "answer": "Cap / PCAP format (`.cap`).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 286; MS Learn Intro Network Watcher, Unit 4"
  },
  {
    "id": "p03-m08-06",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Network Watcher - Packet Capture VM Prerequisite",
    "question": "What must be installed on a VM before Network Watcher can execute remote packet captures?",
    "answer": "The Azure Network Watcher Agent VM extension.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 286"
  },
  {
    "id": "p03-m08-07",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Network Watcher - Connection Troubleshoot",
    "question": "What does the Network Watcher 'Connection troubleshoot' tool verify between a source VM and destination endpoint?",
    "answer": "It tests TCP connectivity, measures round-trip latency, and identifies hop-by-hop bottlenecks or firewall blocks.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 285; MS Learn Intro Network Watcher, Unit 2"
  },
  {
    "id": "p03-m08-08",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Network Watcher - VPN Troubleshoot Scope",
    "question": "What does the Network Watcher 'VPN troubleshoot' tool diagnose?",
    "answer": "Health status of Virtual Network Gateways and Site-to-Site VPN connections.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 288; MS Learn Intro Network Watcher, Unit 4"
  },
  {
    "id": "p03-m08-09",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Network Watcher - Regional Resource Model",
    "question": "Is Network Watcher a global service or a regional service in Azure?",
    "answer": "It is a regional service; a Network Watcher instance is created per region where virtual networks exist.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 284; MS Learn Intro Network Watcher, Unit 2"
  },
  {
    "id": "p03-m08-10",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Network Watcher - Security Group View",
    "question": "What does the Network Watcher 'Security group view' tool display for a VM network interface?",
    "answer": "The combined effective NSG rules applied from both subnet and NIC levels.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 285"
  },
  {
    "id": "p03-m08-11",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Network Watcher - Connection Monitor Capability",
    "question": "What is the purpose of Network Watcher Connection Monitor compared to one-time Connection Troubleshoot?",
    "answer": "Continuous proactive monitoring of network connectivity and performance across hybrid, multi-cloud, and Azure endpoints.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 289; MS Learn Intro Network Watcher, Unit 2"
  },
  {
    "id": "p03-m08-12",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Network Watcher - NSG Flow Logs Version 2 Addition",
    "question": "What additional information does NSG Flow Logs Version 2 record compared to Version 1?",
    "answer": "Flow state (throughput in bytes/packets) and TCP handshake metrics.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 287"
  },
  {
    "id": "p03-m02-13",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "NSG - Effective Security Rules Tool",
    "question": "What tool reveals the combined, evaluated Allow/Deny verdict when NSGs exist on both a Subnet and a VM NIC?",
    "answer": "The 'Effective security rules' tool in Network Watcher or on the VM NIC blade.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 235; MS Learn Configure NSGs, Unit 4"
  },
  {
    "id": "p03-m06-13",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Azure Load Balancer - Session Persistence Hash",
    "question": "Which session persistence setting on an Azure Load Balancer rule binds a client to the same backend VM based on source and destination IP?",
    "answer": "'Client IP' (2-tuple hash: Source IP, Destination IP).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 268; MS Learn Configure Load Balancers, Unit 4"
  },
  {
    "id": "p03-m06-14",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Load Balancer - Platform Health Probe IP",
    "question": "Which virtual IP address originates Azure Load Balancer health probes and must not be blocked by NSGs?",
    "answer": "`168.63.129.16` (covered by default tag `AzureLoadBalancer`).",
    "source": "Exam Ref AZ-104, Ch. 4, p. 269; MS Learn Configure Load Balancers, Unit 4"
  },
  {
    "id": "p03-m08-13",
    "section": "03-configure-and-manage-virtual-networks",
    "topic": "Network Watcher - Connection Monitor Purpose",
    "question": "What Network Watcher capability provides continuous synthetic testing of latency, packet loss, and topology across hybrid connections?",
    "answer": "Connection Monitor.",
    "source": "Exam Ref AZ-104, Ch. 4, p. 278; MS Learn Network Watcher, Unit 4"
  },
  {
    "id": "p04-m01-01",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Accounts - Naming Rules",
    "question": "What are the naming rules for an Azure Storage Account name?",
    "answer": "Between 3 and 24 characters, lowercase letters and numbers only, and globally unique across all of Azure.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 88; MS Learn Configure Storage Accounts, Unit 2"
  },
  {
    "id": "p04-m01-02",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Redundancy - Locally Redundant Storage (LRS)",
    "question": "How many copies of data are maintained in Locally Redundant Storage (LRS) and where are they located?",
    "answer": "3 copies synchronously within a single physical datacenter in the primary region (11 nines durability).",
    "source": "Exam Ref AZ-104, Ch. 2, p. 90; MS Learn Configure Storage Accounts, Unit 3"
  },
  {
    "id": "p04-m01-03",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Redundancy - Zone-Redundant Storage (ZRS)",
    "question": "How does Zone-Redundant Storage (ZRS) distribute data within the primary region?",
    "answer": "Synchronously across three separate Azure Availability Zones in the primary region (12 nines durability).",
    "source": "Exam Ref AZ-104, Ch. 2, p. 91; MS Learn Configure Storage Accounts, Unit 3"
  },
  {
    "id": "p04-m01-04",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Redundancy - Geo-Redundant Storage (GRS)",
    "question": "How is data replicated in Geo-Redundant Storage (GRS)?",
    "answer": "Synchronously 3 times using LRS in the primary region, then replicated asynchronously using LRS to the paired secondary region (16 nines durability).",
    "source": "Exam Ref AZ-104, Ch. 2, p. 92; MS Learn Configure Storage Accounts, Unit 3"
  },
  {
    "id": "p04-m01-05",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Redundancy - Geo-Zone-Redundant Storage (GZRS)",
    "question": "What replication strategy does Geo-Zone-Redundant Storage (GZRS) use?",
    "answer": "Replicates synchronously across 3 availability zones (ZRS) in the primary region, and asynchronously replicates using LRS to the secondary paired region.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 92; MS Learn Configure Storage Accounts, Unit 3"
  },
  {
    "id": "p04-m01-06",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Redundancy - Read-Access Secondary (RA-GRS)",
    "question": "What operational capability does RA-GRS provide that standard GRS does not?",
    "answer": "Read-only access to replicated data at the secondary endpoint (`*-secondary.blob.core.windows.net`) without initiating a failover.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 93; MS Learn Configure Storage Accounts, Unit 3"
  },
  {
    "id": "p04-m01-07",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Redundancy - Account Failover Outcome",
    "question": "What happens to the redundancy level of a GRS storage account immediately after an administrator triggers a customer-managed account failover?",
    "answer": "The storage account redundancy is converted to LRS in the new primary region, and geo-replication ceases.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 94; MS Learn Configure Storage Accounts, Unit 4"
  },
  {
    "id": "p04-m01-08",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Redundancy - Paired Region Mapping",
    "question": "Can you choose any arbitrary Azure region as the geo-replication target for a GRS storage account?",
    "answer": "No, Azure automatically pairs designated regions (e.g., East US is paired with West US).",
    "source": "Exam Ref AZ-104, Ch. 2, p. 92"
  },
  {
    "id": "p04-m01-09",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Accounts - Standard vs Premium Performance",
    "question": "What backing storage hardware differentiates Standard storage accounts from Premium storage accounts?",
    "answer": "Standard accounts are backed by magnetic hard disk drives (HDD); Premium accounts are backed by solid-state drives (SSD).",
    "source": "Exam Ref AZ-104, Ch. 2, p. 89; MS Learn Configure Storage Accounts, Unit 2"
  },
  {
    "id": "p04-m01-10",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Accounts - Supported Data Services",
    "question": "Name the four core data services provided by a General-purpose v2 Azure Storage account.",
    "answer": "Blob Storage, Azure Files, Queue Storage, and Table Storage.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 89; MS Learn Configure Storage Accounts, Unit 2"
  },
  {
    "id": "p04-m01-11",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Accounts - Object Replication Feature",
    "question": "What is Azure Storage Object Replication?",
    "answer": "Asynchronous block-blob copying from a container in one storage account to a container in another account in any region.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 95; MS Learn Configure Storage Accounts, Unit 5"
  },
  {
    "id": "p04-m01-12",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Accounts - Object Replication Prerequisites",
    "question": "Which two blob features must be enabled on both source and destination accounts to use Object Replication?",
    "answer": "Blob versioning and Change feed.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 96"
  },
  {
    "id": "p04-m01-13",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Accounts - Default Access Tier Setting",
    "question": "What are the two options for the default access tier of a General-purpose v2 storage account?",
    "answer": "Hot and Cool.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 97; MS Learn Configure Storage Accounts, Unit 2"
  },
  {
    "id": "p04-m01-14",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Accounts - Data Lake Storage Gen2 Feature",
    "question": "Which setting in a General-purpose v2 storage account enables Azure Data Lake Storage Gen2 hierarchical namespace?",
    "answer": "'Enable hierarchical namespace'.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 89; MS Learn Configure Storage Accounts, Unit 2"
  },
  {
    "id": "p04-m01-15",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Accounts - Conversion Between LRS and ZRS",
    "question": "Can an existing LRS storage account be converted to ZRS in regions supporting Availability Zones?",
    "answer": "Yes, either through customer-initiated live migration or manual data copy.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 94"
  },
  {
    "id": "p04-m02-01",
    "section": "04-implement-and-manage-storage",
    "topic": "Blob Storage - Blob Types",
    "question": "What are the three types of blobs supported in Azure Blob Storage?",
    "answer": "Block blobs (text/binary data), Append blobs (logging/stream writes), and Page blobs (random read/write for VM disks).",
    "source": "Exam Ref AZ-104, Ch. 2, p. 104; MS Learn Configure Blob Storage, Unit 2"
  },
  {
    "id": "p04-m02-02",
    "section": "04-implement-and-manage-storage",
    "topic": "Blob Storage - Four Access Tiers",
    "question": "Name the four access tiers available for Azure Blob Storage.",
    "answer": "Hot, Cool, Cold, and Archive.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 107; MS Learn Configure Blob Storage, Unit 3"
  },
  {
    "id": "p04-m02-03",
    "section": "04-implement-and-manage-storage",
    "topic": "Blob Storage - Hot vs Cool Cost Trade-off",
    "question": "How do the storage costs and data access costs compare between Hot tier and Cool tier?",
    "answer": "Hot tier has higher storage cost but lowest access cost; Cool tier has lower storage cost but higher access/transaction cost.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 108; MS Learn Configure Blob Storage, Unit 3"
  },
  {
    "id": "p04-m02-04",
    "section": "04-implement-and-manage-storage",
    "topic": "Blob Storage - Minimum Retention Days by Tier",
    "question": "What are the minimum retention periods for Cool, Cold, and Archive tiers before early deletion fees apply?",
    "answer": "Cool: 30 days; Cold: 90 days; Archive: 180 days.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 108; MS Learn Configure Blob Storage, Unit 3"
  },
  {
    "id": "p04-m02-05",
    "section": "04-implement-and-manage-storage",
    "topic": "Blob Storage - Archive Tier Offline Status",
    "question": "Can client applications read or download a blob stored in the Archive tier directly?",
    "answer": "No, Archive is an offline tier; blobs must first be rehydrated to Hot or Cool tier before reading.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 109; MS Learn Configure Blob Storage, Unit 4"
  },
  {
    "id": "p04-m02-06",
    "section": "04-implement-and-manage-storage",
    "topic": "Blob Storage - Rehydration Priority Options",
    "question": "What are the two priority options when rehydrating an archived blob, and what are their typical completion times?",
    "answer": "Standard priority (up to 15 hours) and High priority (under 1 hour for blobs < 10 GB).",
    "source": "Exam Ref AZ-104, Ch. 2, p. 110; MS Learn Configure Blob Storage, Unit 4"
  },
  {
    "id": "p04-m02-07",
    "section": "04-implement-and-manage-storage",
    "topic": "Blob Storage - Lifecycle Management Action Types",
    "question": "What automated actions can an Azure Blob Lifecycle Management rule perform based on blob age?",
    "answer": "Transition to Cool tier, transition to Cold tier, transition to Archive tier, and delete the blob.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 111; MS Learn Configure Blob Storage, Unit 5"
  },
  {
    "id": "p04-m02-08",
    "section": "04-implement-and-manage-storage",
    "topic": "Blob Storage - Blob Soft Delete Retention Range",
    "question": "What is the configurable retention range for Blob Soft Delete?",
    "answer": "Between 1 and 365 days (default is 7 days if enabled).",
    "source": "Exam Ref AZ-104, Ch. 2, p. 113; MS Learn Configure Blob Storage, Unit 6"
  },
  {
    "id": "p04-m02-09",
    "section": "04-implement-and-manage-storage",
    "topic": "Blob Storage - Blob Versioning Mechanism",
    "question": "What does Blob Versioning do when a blob is modified or overwritten?",
    "answer": "It automatically creates an immutable previous version timestamp while updating the current base blob.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 114; MS Learn Configure Blob Storage, Unit 6"
  },
  {
    "id": "p04-m02-10",
    "section": "04-implement-and-manage-storage",
    "topic": "Blob Storage - Immutable Storage Types",
    "question": "What are the two types of immutable policies supported for WORM (Write Once, Read Many) blob compliance?",
    "answer": "Time-based retention policies and Legal holds.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 115; MS Learn Configure Blob Storage, Unit 6"
  },
  {
    "id": "p04-m02-11",
    "section": "04-implement-and-manage-storage",
    "topic": "Blob Storage - Legal Hold Removal",
    "question": "How long does a Legal Hold protect blobs from deletion or modification?",
    "answer": "Indefinitely until an authorized administrator explicitly removes the legal hold tag.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 116"
  },
  {
    "id": "p04-m02-12",
    "section": "04-implement-and-manage-storage",
    "topic": "Blob Storage - Container Public Access Levels",
    "question": "What are the three anonymous public read access levels available for a blob container?",
    "answer": "Private (no anonymous access), Blob (anonymous read for blobs only), and Container (anonymous read for entire container and blob listings).",
    "source": "Exam Ref AZ-104, Ch. 2, p. 106; MS Learn Configure Blob Storage, Unit 2"
  },
  {
    "id": "p04-m02-13",
    "section": "04-implement-and-manage-storage",
    "topic": "Blob Storage - Disable Public Access Toggle",
    "question": "What storage account setting blocks all anonymous public read access regardless of container-level permissions?",
    "answer": "'Allow Blob anonymous access' set to Disabled.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 106"
  },
  {
    "id": "p04-m02-14",
    "section": "04-implement-and-manage-storage",
    "topic": "Blob Storage - Change Feed Purpose",
    "question": "What does the Azure Blob Storage Change Feed provide?",
    "answer": "An ordered, read-only, durable log of all create, update, and delete events that occur in blob containers.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 115"
  },
  {
    "id": "p04-m02-15",
    "section": "04-implement-and-manage-storage",
    "topic": "Blob Storage - Snapshot vs Version",
    "question": "How does an Azure Blob Snapshot differ from a Blob Version?",
    "answer": "A snapshot is a manual point-in-time read-only copy, while a version is automatically created by Azure on every blob write operation.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 114"
  },
  {
    "id": "p04-m03-01",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Security - Shared Key Zero Downtime Rotation",
    "question": "How do you rotate storage account access keys without application downtime?",
    "answer": "Update applications to use `key2`, regenerate `key1`, update applications to use `key1`, then regenerate `key2`.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 118; MS Learn Configure Storage Security, Unit 2"
  },
  {
    "id": "p04-m03-02",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Security - Shared Access Signature (SAS) Types",
    "question": "What are the three types of Shared Access Signatures (SAS) supported in Azure Storage?",
    "answer": "User Delegation SAS, Service SAS, and Account SAS.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 120; MS Learn Configure Storage Security, Unit 3"
  },
  {
    "id": "p04-m03-03",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Security - User Delegation SAS Security Advantage",
    "question": "Why is a User Delegation SAS more secure than a Service SAS or Account SAS?",
    "answer": "It is signed with Microsoft Entra ID credentials rather than the root storage account key, eliminating root key exposure.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 121; MS Learn Configure Storage Security, Unit 3"
  },
  {
    "id": "p04-m03-04",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Security - Stored Access Policy Purpose",
    "question": "What administrative control does a Stored Access Policy provide over a Service SAS?",
    "answer": "It allows modifying the permissions, start/expiry time, or immediately revoking the SAS without changing the storage account key.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 122; MS Learn Configure Storage Security, Unit 3"
  },
  {
    "id": "p04-m03-05",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Security - Stored Access Policy Limit",
    "question": "What is the maximum number of Stored Access Policies that can be defined on a single container, share, table, or queue?",
    "answer": "Up to 5 stored access policies.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 123"
  },
  {
    "id": "p04-m03-06",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Security - Customer-Managed Keys (CMK) Location",
    "question": "Where are Customer-Managed Keys stored when configuring double encryption at rest for Azure Storage?",
    "answer": "In Azure Key Vault (or Azure Key Vault Managed HSM).",
    "source": "Exam Ref AZ-104, Ch. 2, p. 125; MS Learn Configure Storage Security, Unit 4"
  },
  {
    "id": "p04-m03-07",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Security - Key Vault Prerequisites for CMK",
    "question": "Which two Key Vault security features must be enabled before using it for storage customer-managed keys?",
    "answer": "Soft Delete and Purge Protection.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 125; MS Learn Configure Storage Security, Unit 4"
  },
  {
    "id": "p04-m03-08",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Security - Storage Firewall Default Rule",
    "question": "When storage firewall 'Selected networks' is enabled, what happens to requests from IP addresses not in the allowlist?",
    "answer": "They are denied with an HTTP 403 Forbidden error.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 127; MS Learn Configure Storage Security, Unit 5"
  },
  {
    "id": "p04-m03-09",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Security - Trusted Microsoft Services Bypass",
    "question": "What setting allows Azure Backup, Azure Monitor, and Azure Site Recovery to reach a firewalled storage account?",
    "answer": "'Allow Azure services on the trusted services list to access this storage account'.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 128; MS Learn Configure Storage Security, Unit 5"
  },
  {
    "id": "p04-m03-10",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Security - Minimum TLS Enforcement",
    "question": "What minimum version of Transport Layer Security (TLS) should be configured on Azure Storage accounts for modern compliance?",
    "answer": "TLS 1.2 (or TLS 1.3).",
    "source": "Exam Ref AZ-104, Ch. 2, p. 126; MS Learn Configure Storage Security, Unit 2"
  },
  {
    "id": "p04-m03-11",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Security - Secure Transfer Required",
    "question": "What does the 'Secure transfer required' setting enforce on an Azure Storage account?",
    "answer": "It rejects unencrypted HTTP requests and enforces HTTPS for all REST API calls and SMB connections.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 126; MS Learn Configure Storage Security, Unit 2"
  },
  {
    "id": "p04-m03-12",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Security - Disable Shared Key Access Setting",
    "question": "How can an administrator enforce that all blob access requests must authenticate exclusively with Microsoft Entra ID?",
    "answer": "By setting 'Allow storage account key access' to Disabled (`allowSharedKeyAccess = false`).",
    "source": "Exam Ref AZ-104, Ch. 2, p. 119; MS Learn Configure Storage Security, Unit 2"
  },
  {
    "id": "p04-m03-13",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Security - Azure RBAC Data Plane Roles",
    "question": "Name two built-in Azure RBAC roles that grant data plane read/write access to Azure Blob Storage.",
    "answer": "`Storage Blob Data Contributor` and `Storage Blob Data Owner` (or `Storage Blob Data Reader`).",
    "source": "Exam Ref AZ-104, Ch. 2, p. 124; MS Learn Configure Storage Security, Unit 3"
  },
  {
    "id": "p04-m03-14",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Security - SAS IP Address Restriction",
    "question": "Can a Shared Access Signature (SAS) token be restricted to accept requests only from a specific client IP address or range?",
    "answer": "Yes, by configuring the `IP address or range` parameter during SAS generation.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 121"
  },
  {
    "id": "p04-m03-15",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Security - HTTPS Only Protocol Restriction in SAS",
    "question": "Which protocol setting should always be selected when generating an Azure Storage SAS token?",
    "answer": "`HTTPS only`.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 122"
  },
  {
    "id": "p04-m04-01",
    "section": "04-implement-and-manage-storage",
    "topic": "Azure Files - Standard vs Premium Protocols",
    "question": "Which network file-sharing protocols are supported by Azure Files on Standard vs Premium file shares?",
    "answer": "Standard supports SMB (2.1 and 3.0); Premium supports both SMB and NFS 4.1.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 98; MS Learn Configure Azure Files, Unit 2"
  },
  {
    "id": "p04-m04-02",
    "section": "04-implement-and-manage-storage",
    "topic": "Azure Files - SMB Outbound Port Requirement",
    "question": "Which TCP network port must be open outbound for clients to mount an Azure Files share via SMB 3.0?",
    "answer": "TCP Port 445.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 99; MS Learn Configure Azure Files, Unit 3"
  },
  {
    "id": "p04-m04-03",
    "section": "04-implement-and-manage-storage",
    "topic": "Azure Files - Identity-Based Authentication Options",
    "question": "What three identity sources can authenticate SMB access to Azure file shares?",
    "answer": "On-premises Active Directory Domain Services (AD DS), Microsoft Entra Domain Services, and Microsoft Entra Kerberos for hybrid identities.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 100; MS Learn Configure Azure Files, Unit 4"
  },
  {
    "id": "p04-m04-04",
    "section": "04-implement-and-manage-storage",
    "topic": "Azure Files - Share-Level RBAC Roles",
    "question": "Name the three built-in Azure RBAC roles used to assign share-level permissions on Azure file shares.",
    "answer": "`Storage File Data SMB Share Reader`, `Storage File Data SMB Share Contributor`, and `Storage File Data SMB Share Elevated Contributor`.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 101; MS Learn Configure Azure Files, Unit 4"
  },
  {
    "id": "p04-m04-05",
    "section": "04-implement-and-manage-storage",
    "topic": "Azure File Sync - Core Components",
    "question": "What are the four primary architectural components of Azure File Sync?",
    "answer": "Storage Sync Service, Registered Server, Sync Group, and Endpoints (Cloud Endpoint and Server Endpoint).",
    "source": "Exam Ref AZ-104, Ch. 2, p. 102; MS Learn Configure Azure Files, Unit 5"
  },
  {
    "id": "p04-m04-06",
    "section": "04-implement-and-manage-storage",
    "topic": "Azure File Sync - Cloud Endpoint Definition",
    "question": "What is a Cloud Endpoint in an Azure File Sync group?",
    "answer": "An Azure file share that acts as the centralized master storage location in the cloud.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 102; MS Learn Configure Azure Files, Unit 5"
  },
  {
    "id": "p04-m04-07",
    "section": "04-implement-and-manage-storage",
    "topic": "Azure File Sync - Server Endpoint Definition",
    "question": "What is a Server Endpoint in Azure File Sync?",
    "answer": "A specific folder path on a registered Windows Server that synchronizes with the Cloud Endpoint.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 102; MS Learn Configure Azure Files, Unit 5"
  },
  {
    "id": "p04-m04-08",
    "section": "04-implement-and-manage-storage",
    "topic": "Azure File Sync - Cloud Tiering Function",
    "question": "What is the purpose of Cloud Tiering in Azure File Sync?",
    "answer": "It caches frequently accessed files locally on Windows Server while archiving infrequently accessed files to Azure Files as pointer stubs.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 103; MS Learn Configure Azure Files, Unit 6"
  },
  {
    "id": "p04-m04-09",
    "section": "04-implement-and-manage-storage",
    "topic": "Azure File Sync - Cloud Tiering Policies",
    "question": "Which two policies control when files are tiered in Azure File Sync?",
    "answer": "The Volume Free Space Policy (maintains a % of free disk space) and the Date Policy (tiers files not accessed within N days).",
    "source": "Exam Ref AZ-104, Ch. 2, p. 103; MS Learn Configure Azure Files, Unit 6"
  },
  {
    "id": "p04-m04-10",
    "section": "04-implement-and-manage-storage",
    "topic": "Azure File Sync - System Volume Restriction",
    "question": "Can a Server Endpoint in Azure File Sync be configured on the Windows Server system volume root (`C:\\`)?",
    "answer": "No, Server Endpoints cannot be located on the root of a volume or system directory.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 102"
  },
  {
    "id": "p04-m04-11",
    "section": "04-implement-and-manage-storage",
    "topic": "Azure Files - File Share Soft Delete Window",
    "question": "What is the default and maximum retention duration for Azure File Share soft delete?",
    "answer": "Default is 7 days; can be configured up to 365 days.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 104; MS Learn Configure Azure Files, Unit 2"
  },
  {
    "id": "p04-m04-12",
    "section": "04-implement-and-manage-storage",
    "topic": "Azure Files - Snapshot Mechanism",
    "question": "What is an Azure File Share Snapshot?",
    "answer": "A read-only, point-in-time copy of an Azure file share that charges only for incremental block differences.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 104; MS Learn Configure Azure Files, Unit 3"
  },
  {
    "id": "p04-m04-13",
    "section": "04-implement-and-manage-storage",
    "topic": "Azure Files - Share Capacity Maximum Limit",
    "question": "What is the maximum capacity of a large Azure file share?",
    "answer": "Up to 100 TiB (when Large File Shares is enabled).",
    "source": "Exam Ref AZ-104, Ch. 2, p. 98; MS Learn Configure Azure Files, Unit 2"
  },
  {
    "id": "p04-m04-14",
    "section": "04-implement-and-manage-storage",
    "topic": "Azure Files - Storage File Data SMB Share Elevated Contributor",
    "question": "Which role is specifically required to set Windows NTFS Access Control Lists (ACLs) on an Azure file share?",
    "answer": "`Storage File Data SMB Share Elevated Contributor`.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 101"
  },
  {
    "id": "p04-m04-15",
    "section": "04-implement-and-manage-storage",
    "topic": "Azure File Sync - OS Compatibility",
    "question": "Which operating system family supports the Azure File Sync agent?",
    "answer": "Windows Server (2012 R2, 2016, 2019, 2022, 2025).",
    "source": "Exam Ref AZ-104, Ch. 2, p. 102"
  },
  {
    "id": "p04-m01-16",
    "section": "04-implement-and-manage-storage",
    "topic": "Data Transfer - AzCopy Command Purpose",
    "question": "What is the primary command-line tool optimized for scriptable, high-speed, resumable blob and file data transfers to Azure Storage?",
    "answer": "AzCopy (`azcopy copy` / `azcopy sync`).",
    "source": "Exam Ref AZ-104, Ch. 2, p. 95; MS Learn Configure Storage Accounts, Unit 6"
  },
  {
    "id": "p04-m02-16",
    "section": "04-implement-and-manage-storage",
    "topic": "Blob Storage - Container Soft Delete Scope",
    "question": "What does Container Soft Delete protect in Azure Blob Storage?",
    "answer": "It protects entire deleted containers (and all contained blobs) from permanent deletion for a retention period of 1 to 365 days.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 116; MS Learn Configure Blob Storage, Unit 6"
  },
  {
    "id": "p04-m03-16",
    "section": "04-implement-and-manage-storage",
    "topic": "Storage Security - Infrastructure Encryption",
    "question": "What is 'Infrastructure Encryption' in Azure Storage and when must it be enabled?",
    "answer": "It provides 256-bit AES double encryption at both service and infrastructure layers; it can only be enabled during storage account creation.",
    "source": "Exam Ref AZ-104, Ch. 2, p. 87; MS Learn Configure Storage Security, Unit 5"
  },
  {
    "id": "p05-m01-01",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Virtual Machines - Temporary Disk Warning",
    "question": "Why should applications never store persistent data on an Azure VM's temporary drive (D: on Windows, /dev/sdb on Linux)?",
    "answer": "Because the temporary disk is ephemeral; all data is lost when the VM is stopped, deallocated, or moved to a new host.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 147; MS Learn Intro Azure VMs, Unit 2"
  },
  {
    "id": "p05-m01-02",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Virtual Machines - Disk Caching for Database Logs",
    "question": "What host caching setting is recommended for Azure data disks storing database write-ahead transaction logs?",
    "answer": "None (to avoid write caching latency and prevent data corruption during host failure).",
    "source": "Exam Ref AZ-104, Ch. 3, p. 150; MS Learn Intro Azure VMs, Unit 4"
  },
  {
    "id": "p05-m01-03",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Virtual Machines - Disk Caching for Read-Heavy Workloads",
    "question": "What host caching option is optimal for read-intensive data disks on an Azure VM?",
    "answer": "ReadOnly caching (cached in host RAM and local NVMe).",
    "source": "Exam Ref AZ-104, Ch. 3, p. 150; MS Learn Intro Azure VMs, Unit 4"
  },
  {
    "id": "p05-m01-04",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Virtual Machines - Managed Disk Types",
    "question": "Name the four primary Azure Managed Disk types from lowest to highest performance.",
    "answer": "Standard HDD, Standard SSD, Premium SSD (v1/v2), and Ultra Disk.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 148; MS Learn Intro Azure VMs, Unit 3"
  },
  {
    "id": "p05-m01-05",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Virtual Machines - Ultra Disk Limitations",
    "question": "Which VM feature cannot be used with Ultra Disks (e.g., Azure Backup, Disk Encryption)?",
    "answer": "Ultra Disks cannot be backed up natively via Azure Backup Recovery Services vaults or used as OS disks.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 149"
  },
  {
    "id": "p05-m01-06",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Virtual Machines - Azure Bastion Core Benefit",
    "question": "What is the security advantage of connecting to an Azure VM via Azure Bastion?",
    "answer": "Provides secure RDP/SSH access directly in the browser over TLS (port 443) without exposing public IP addresses on VMs.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 154; MS Learn Intro Azure VMs, Unit 5"
  },
  {
    "id": "p05-m01-07",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Virtual Machines - Azure Bastion Subnet Requirement",
    "question": "What exact name and minimum prefix size must be given to the subnet dedicated to Azure Bastion?",
    "answer": "`AzureBastionSubnet` with a minimum size of `/26`.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 154; MS Learn Intro Azure VMs, Unit 5"
  },
  {
    "id": "p05-m01-08",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Virtual Machines - Just-In-Time (JIT) VM Access",
    "question": "How does Just-In-Time (JIT) VM Access protect management ports like 3389 and 22?",
    "answer": "It locks down inbound management ports via NSG rules and only opens them upon approved user request for a limited time.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 155; MS Learn Intro Azure VMs, Unit 5"
  },
  {
    "id": "p05-m01-09",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Virtual Machines - Stopped vs Deallocated Cost State",
    "question": "What is the billing difference between a VM in the 'Stopped' state versus 'Stopped (deallocated)'?",
    "answer": "'Stopped' still incurs compute compute charges because hardware cores remain reserved; 'Stopped (deallocated)' releases compute cores and halts compute billing.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 146; MS Learn Intro Azure VMs, Unit 2"
  },
  {
    "id": "p05-m01-10",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Virtual Machines - Resizing Restart Requirement",
    "question": "Does resizing an Azure Virtual Machine require a reboot?",
    "answer": "Yes, changing a VM size always causes a reboot of the operating system.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 151; MS Learn Intro Azure VMs, Unit 4"
  },
  {
    "id": "p05-m01-11",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Virtual Machines - Disk Bursting Types",
    "question": "What are the two disk bursting modes available for Azure Premium SSDs?",
    "answer": "Credit-based bursting (free, based on IOPS credits) and On-demand bursting (paid per burst transaction).",
    "source": "Exam Ref AZ-104, Ch. 3, p. 150"
  },
  {
    "id": "p05-m01-12",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Virtual Machines - SSH Key Pair Generation",
    "question": "What is the recommended authentication method for Linux VMs in Azure instead of passwords?",
    "answer": "SSH public key authentication (RSA or Ed25519).",
    "source": "Exam Ref AZ-104, Ch. 3, p. 152; MS Learn Intro Azure VMs, Unit 2"
  },
  {
    "id": "p05-m01-13",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Virtual Machines - Custom Script Extension Purpose",
    "question": "What does the Azure Custom Script Extension do during VM post-provisioning?",
    "answer": "It automatically downloads and executes custom scripts inside the guest OS without requiring manual login.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 156; MS Learn Intro Azure VMs, Unit 6"
  },
  {
    "id": "p05-m01-14",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Virtual Machines - Boot Diagnostics Storage Destination",
    "question": "Where does Azure store VM console serial log outputs and OS crash screenshots when Boot Diagnostics is enabled?",
    "answer": "Either in managed storage (default) or in a customer-designated Azure Storage account.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 157; MS Learn Intro Azure VMs, Unit 5"
  },
  {
    "id": "p05-m02-01",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "VM Availability - Fault Domains Definition",
    "question": "What is an Azure Fault Domain (FD)?",
    "answer": "A physical group of hardware servers that share a common power source and physical network switch.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 159; MS Learn VM Availability, Unit 2"
  },
  {
    "id": "p05-m02-02",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "VM Availability - Update Domains Definition",
    "question": "What is an Azure Update Domain (UD)?",
    "answer": "A logical group of underlying hardware hosts that can undergo planned platform maintenance and rebooting at the same time.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 160; MS Learn VM Availability, Unit 2"
  },
  {
    "id": "p05-m02-03",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "VM Availability - Maximum FDs and UDs in Availability Set",
    "question": "What are the maximum supported numbers of Fault Domains and Update Domains in an Azure Availability Set?",
    "answer": "Up to 3 Fault Domains and up to 20 Update Domains.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 160; MS Learn VM Availability, Unit 2"
  },
  {
    "id": "p05-m02-04",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "VM Availability - Availability Set Timing Restriction",
    "question": "Can an existing standalone Azure VM be moved into an Availability Set after creation?",
    "answer": "No, a VM can only be placed into an Availability Set at the time of VM deployment.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 161; MS Learn VM Availability, Unit 2"
  },
  {
    "id": "p05-m02-05",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "VM Availability - Availability Zones SLA",
    "question": "What is the Azure SLA for virtual machines distributed across two or more Availability Zones in the same region?",
    "answer": "99.99% availability.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 162; MS Learn VM Availability, Unit 3"
  },
  {
    "id": "p05-m02-06",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "VM Availability - Availability Set SLA",
    "question": "What is the Azure SLA for two or more VMs deployed across an Availability Set?",
    "answer": "99.95% availability.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 162; MS Learn VM Availability, Unit 2"
  },
  {
    "id": "p05-m02-07",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "VM Availability - Availability Zone Definition",
    "question": "What physical infrastructure constitutes an Azure Availability Zone?",
    "answer": "One or more physically separate datacenters within a region, each equipped with independent power, cooling, and networking.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 161; MS Learn VM Availability, Unit 3"
  },
  {
    "id": "p05-m02-08",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "VMSS - Uniform vs Flexible Orchestration",
    "question": "What is the primary difference between Uniform and Flexible orchestration modes in a Virtual Machine Scale Set (VMSS)?",
    "answer": "Uniform uses identical VMs deployed from a single golden image; Flexible supports heterogeneous VM sizes, spot VMs, and independent lifecycle management.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 164; MS Learn VM Availability, Unit 4"
  },
  {
    "id": "p05-m02-09",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "VMSS - Autoscale Metric Triggers",
    "question": "What metric is most commonly configured to trigger an automated scale-out rule in a VMSS?",
    "answer": "Percentage CPU utilization exceeding a specified threshold (e.g., > 75% for 10 minutes).",
    "source": "Exam Ref AZ-104, Ch. 3, p. 166; MS Learn VM Availability, Unit 5"
  },
  {
    "id": "p05-m02-10",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "VMSS - Scale In Cooldown Period",
    "question": "What is the purpose of the 'Cooldown' period in an autoscale rule?",
    "answer": "It pauses scaling actions for a set time (e.g., 5-10 minutes) after a scale event to allow metrics to stabilize and prevent flapping.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 167; MS Learn VM Availability, Unit 5"
  },
  {
    "id": "p05-m02-11",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "VMSS - Upgrade Policy Modes",
    "question": "What are the three upgrade policies available for a Virtual Machine Scale Set?",
    "answer": "Automatic, Rolling, and Manual.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 165; MS Learn VM Availability, Unit 4"
  },
  {
    "id": "p05-m02-12",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "VMSS - Overprovisioning Setting Effect",
    "question": "What does the `overprovision` property do during VMSS scale-out?",
    "answer": "Azure spins up more VMs than requested and deletes the excess once the required number of VMs successfully provision.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 165"
  },
  {
    "id": "p05-m02-13",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "VM Availability - Single VM SLA with Premium SSD",
    "question": "What is the Azure SLA for a single standalone VM using Premium SSD or Ultra Disk for all operating system and data disks?",
    "answer": "99.9% availability.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 162"
  },
  {
    "id": "p05-m02-14",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "VMSS - Scale In Policy Options",
    "question": "Which scale-in policy options control which VM instances are deleted first during a scale-in event?",
    "answer": "Default (balanced across zones/fault domains), NewestVM, and OldestVM.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 168"
  },
  {
    "id": "p05-m03-01",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "App Service Plans - Core Concept",
    "question": "What compute resource does an Azure App Service Plan represent?",
    "answer": "A managed set of compute resources (virtual machine instances, CPU, memory, and OS) allocated to host one or more web apps.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 182; MS Learn App Service Plans, Unit 2"
  },
  {
    "id": "p05-m03-02",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "App Service Plans - Scale Up vs Scale Out",
    "question": "What is the difference between Scaling Up and Scaling Out an App Service Plan?",
    "answer": "Scaling Up changes to a higher pricing tier with more CPU/RAM; Scaling Out increases the number of VM instances running the app.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 184; MS Learn App Service Plans, Unit 3"
  },
  {
    "id": "p05-m03-03",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "App Service Plans - Minimum Tier for Custom Domains and SSL",
    "question": "What is the minimum App Service pricing tier required to bind a custom domain name and SSL certificate?",
    "answer": "Basic tier.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 183; MS Learn App Service Plans, Unit 2"
  },
  {
    "id": "p05-m03-04",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "App Service Plans - Minimum Tier for Deployment Slots and Autoscale",
    "question": "What is the minimum App Service pricing tier required for Deployment Slots and automated autoscaling?",
    "answer": "Standard tier.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 183; MS Learn App Service Plans, Unit 2"
  },
  {
    "id": "p05-m03-05",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "App Service Plans - Isolated Tier Environment",
    "question": "What specialized environment hosts web apps in the Isolated v2 App Service plan tier?",
    "answer": "An App Service Environment (ASE), running on dedicated virtual machines inside the customer's private Virtual Network.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 183; MS Learn App Service Plans, Unit 2"
  },
  {
    "id": "p05-m03-06",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "App Service Plans - Multiple Web Apps Sharing Plan",
    "question": "If you deploy 5 separate App Service web apps to the same App Service Plan, how are you billed?",
    "answer": "You are billed only once for the App Service Plan itself; all 5 web apps share the plan's CPU and memory resources.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 185; MS Learn App Service Plans, Unit 2"
  },
  {
    "id": "p05-m03-07",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "App Service Plans - Autoscale Rule Types",
    "question": "What two types of autoscale rules can be configured on an App Service Plan?",
    "answer": "Metric-based rules (e.g., CPU, Memory, HTTP Queue length) and Schedule-based rules (time/date recurrences).",
    "source": "Exam Ref AZ-104, Ch. 3, p. 186; MS Learn App Service Plans, Unit 4"
  },
  {
    "id": "p05-m03-08",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "App Service Plans - Per-App Scaling",
    "question": "What does the 'Per-App Scaling' feature allow when enabled on an App Service Plan?",
    "answer": "It allows individual web apps to scale independently to a subset of the plan's total VM instances.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 187"
  },
  {
    "id": "p05-m03-09",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "App Service Plans - Operating System Restriction",
    "question": "Can a single App Service Plan mix both Windows and Linux web apps in the same plan?",
    "answer": "No, an App Service Plan must be either Windows or Linux; it cannot host both operating systems.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 182"
  },
  {
    "id": "p05-m03-10",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "App Service Plans - Maximum Scale-Out Instances in Standard",
    "question": "What is the maximum number of instances to which a Standard tier App Service Plan can scale out?",
    "answer": "Up to 10 instances (Premium can scale up to 30 instances; Isolated up to 100).",
    "source": "Exam Ref AZ-104, Ch. 3, p. 184"
  },
  {
    "id": "p05-m03-11",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "App Service Plans - Free/Shared Tier Limitations",
    "question": "Name two major limitations of the Free and Shared App Service tiers.",
    "answer": "No custom domain support, no SLA, shared multi-tenant CPU quotas, and no outbound VNet integration.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 183"
  },
  {
    "id": "p05-m03-12",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "App Service Plans - Moving Apps Between Plans",
    "question": "Can you move an App Service web app to a different App Service Plan in the same resource group and region?",
    "answer": "Yes, provided the target plan is of the same operating system type.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 185"
  },
  {
    "id": "p05-m03-13",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "App Service Plans - Regional Affinity",
    "question": "Does an App Service Plan have a regional geographic boundary?",
    "answer": "Yes, an App Service Plan is created in a specific Azure region, and all web apps in it run in that region.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 182"
  },
  {
    "id": "p05-m03-14",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "App Service Plans - Zone Redundancy Requirement",
    "question": "What tier is required to enable zone redundancy for an Azure App Service Plan?",
    "answer": "Premium v2 or Premium v3 tier (with a minimum of 3 worker instances).",
    "source": "Exam Ref AZ-104, Ch. 3, p. 188"
  },
  {
    "id": "p05-m04-01",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure App Service - Deployment Slots Swap Mechanism",
    "question": "How does an App Service deployment slot swap operate without dropping user traffic?",
    "answer": "It performs an in-memory VIP (virtual IP) redirect at the front-end routing layer after warming up the staging slot.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 193; MS Learn Configure App Service, Unit 3"
  },
  {
    "id": "p05-m04-02",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure App Service - Sticky (Deployment Slot) Settings",
    "question": "What happens to configuration settings marked with the 'Deployment slot setting' checkbox during a slot swap?",
    "answer": "They remain sticky to their specific slot and do NOT swap with the application code.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 194; MS Learn Configure App Service, Unit 3"
  },
  {
    "id": "p05-m04-03",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure App Service - Settings that Always Swap",
    "question": "Name two configuration elements that always swap during a deployment slot swap by default.",
    "answer": "Application code content, framework version, virtual applications, and handler mappings.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 194"
  },
  {
    "id": "p05-m04-04",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure App Service - Auto Swap Feature",
    "question": "What does the Auto Swap feature do on an App Service deployment slot?",
    "answer": "Automatically swaps the staging slot into production immediately after new code is successfully deployed and warmed up.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 195; MS Learn Configure App Service, Unit 3"
  },
  {
    "id": "p05-m04-05",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure App Service - Custom Domain Verification Record",
    "question": "Which DNS TXT verification record format is used to prove ownership of a custom domain before binding to App Service?",
    "answer": "`asuid.<subdomain>` containing the Custom Domain Verification ID.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 197; MS Learn Configure App Service, Unit 4"
  },
  {
    "id": "p05-m04-06",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure App Service - App Service Managed Certificate",
    "question": "What is an App Service Managed Certificate?",
    "answer": "A free, automated SSL/TLS certificate issued and auto-renewed by Microsoft for custom domains bound to the web app.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 198; MS Learn Configure App Service, Unit 5"
  },
  {
    "id": "p05-m04-07",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure App Service - Managed Certificate Limitation",
    "question": "Can App Service Managed Certificates be issued for apex (naked) root domains or wildcard domains?",
    "answer": "No, they only support standard subdomains (e.g., `www.contoso.com`), not wildcards or naked root apex domains.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 198"
  },
  {
    "id": "p05-m04-08",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure App Service - Backup Requirements",
    "question": "What are the two prerequisites required to configure automated backups for an Azure App Service web app?",
    "answer": "An App Service Plan in Standard, Premium, or Isolated tier, and an Azure Storage account container.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 200; MS Learn Configure App Service, Unit 6"
  },
  {
    "id": "p05-m04-09",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure App Service - Maximum Backup Size",
    "question": "What is the maximum supported content size for an App Service backup?",
    "answer": "Up to 10 GB of app content and database data.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 200"
  },
  {
    "id": "p05-m04-10",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure App Service - Always On Setting Purpose",
    "question": "What is the purpose of the 'Always On' configuration setting in Azure App Service?",
    "answer": "It keeps the web app loaded in worker memory, preventing cold start delays after periods of inactivity.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 191; MS Learn Configure App Service, Unit 2"
  },
  {
    "id": "p05-m04-11",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure App Service - Regional VNet Integration Direction",
    "question": "What traffic direction does Regional VNet Integration enable for an App Service web app?",
    "answer": "Outbound traffic from the web app into subnets and private endpoints in your Virtual Network.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 202; MS Learn Configure App Service, Unit 7"
  },
  {
    "id": "p05-m04-12",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure App Service - Private Endpoint for Inbound Traffic",
    "question": "How do you secure inbound traffic to an App Service web app so it is only reachable privately within a VNet?",
    "answer": "By creating an Azure Private Endpoint for the web app.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 203"
  },
  {
    "id": "p05-m04-13",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure App Service - Key Vault References Syntax",
    "question": "What syntax is used in App Service Application Settings to pull secret values dynamically from Azure Key Vault?",
    "answer": "`@Microsoft.KeyVault(SecretUri=https://<vault>.vault.azure.net/secrets/<secret>/<version>)`",
    "source": "Exam Ref AZ-104, Ch. 3, p. 192"
  },
  {
    "id": "p05-m04-14",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure App Service - Testing in Production (Traffic Routing)",
    "question": "How can you route 10% of live production traffic to a staging slot for canary testing?",
    "answer": "By setting the traffic routing percentage to 10% on the staging slot in the Deployment Slots tab.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 196"
  },
  {
    "id": "p05-m05-01",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure Container Instances - Architecture Overview",
    "question": "What is Azure Container Instances (ACI)?",
    "answer": "A serverless container platform that runs Docker containers on-demand in seconds without managing VMs or Kubernetes clusters.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 205; MS Learn Configure ACI, Unit 2"
  },
  {
    "id": "p05-m05-02",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure Container Instances - Container Groups Definition",
    "question": "What is an ACI Container Group?",
    "answer": "A collection of containers that schedule on the same host machine and share lifecycle, local network, and mounted storage volumes (similar to a Kubernetes Pod).",
    "source": "Exam Ref AZ-104, Ch. 3, p. 206; MS Learn Configure ACI, Unit 3"
  },
  {
    "id": "p05-m05-03",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure Container Instances - Restart Policies",
    "question": "What are the three restart policies supported for Azure Container Instances?",
    "answer": "`Always` (long-running services), `OnFailure` (batch/transient tasks), and `Never` (run once).",
    "source": "Exam Ref AZ-104, Ch. 3, p. 207; MS Learn Configure ACI, Unit 3"
  },
  {
    "id": "p05-m05-04",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure Container Instances - Secure Environment Variables",
    "question": "How do you protect sensitive credentials passed into an ACI container from being exposed in container inspection properties?",
    "answer": "By defining them as `secureValue` environment variables in ARM/CLI.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 208; MS Learn Configure ACI, Unit 4"
  },
  {
    "id": "p05-m05-05",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure Container Instances - Persistent Storage Volume Type",
    "question": "Which Azure storage service can be mounted directly as a volume inside an Azure Container Instance?",
    "answer": "An Azure Files share.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 209; MS Learn Configure ACI, Unit 5"
  },
  {
    "id": "p05-m05-06",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure Container Instances - Virtual Network Deployment Restriction",
    "question": "What is a key requirement when deploying Azure Container Instances into a private Virtual Network?",
    "answer": "ACI must be deployed into a dedicated, delegated subnet that contains no other resource types.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 210; MS Learn Configure ACI, Unit 6"
  },
  {
    "id": "p05-m05-07",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure Container Instances - Multi-Container Port Sharing",
    "question": "Can two containers in the same ACI Container Group listen on the same port number?",
    "answer": "No, because all containers in the group share the same network namespace and IP address.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 206"
  },
  {
    "id": "p05-m05-08",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure Container Instances - OS Types Supported",
    "question": "Which operating system image types can run on Azure Container Instances?",
    "answer": "Both Linux and Windows container images.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 205"
  },
  {
    "id": "p05-m05-09",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure Container Instances - Registry Authentication",
    "question": "How does ACI authenticate against an Azure Container Registry (ACR) to pull private images?",
    "answer": "Using ACR admin credentials, a service principal, or a managed identity.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 207; MS Learn Configure ACI, Unit 3"
  },
  {
    "id": "p05-m05-10",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure Container Instances - DNS Name Label",
    "question": "What property creates a public FQDN for an ACI container with a public IP?",
    "answer": "The `dnsNameLabel` property (forming `<label>.<region>.azurecontainer.io`).",
    "source": "Exam Ref AZ-104, Ch. 3, p. 208; MS Learn Configure ACI, Unit 4"
  },
  {
    "id": "p05-m05-11",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure Container Instances - Billing Model",
    "question": "How is compute billing calculated for Azure Container Instances?",
    "answer": "Per second based on requested vCPU cores and GB of memory while the container is executing.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 205; MS Learn Configure ACI, Unit 2"
  },
  {
    "id": "p05-m05-12",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure Container Instances - Log Viewing Command",
    "question": "Which Azure CLI command streams real-time stdout logs from a running container instance?",
    "answer": "`az container logs --resource-group <rg> --name <container-group>`",
    "source": "Exam Ref AZ-104, Ch. 3, p. 211; MS Learn Configure ACI, Unit 5"
  },
  {
    "id": "p05-m05-13",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure Container Instances - Command Execution (Exec)",
    "question": "Which command runs an interactive shell session inside an active ACI container?",
    "answer": "`az container exec --resource-group <rg> --name <container-group> --exec-command \"/bin/sh\"`",
    "source": "Exam Ref AZ-104, Ch. 3, p. 211"
  },
  {
    "id": "p05-m05-14",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure Container Instances - Kubernetes Orchestrator Contrast",
    "question": "When should you choose Azure Kubernetes Service (AKS) over Azure Container Instances (ACI)?",
    "answer": "When requiring complex container orchestration, automated service discovery, rolling updates, and ingress controllers.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 205; MS Learn Configure ACI, Unit 2"
  },
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
    "id": "p05-m01-18",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "VM Security - Encryption at Host",
    "question": "What does 'Encryption at Host' protect on an Azure Virtual Machine without CPU overhead?",
    "answer": "It encrypts temporary disks, ephemeral OS disks, and VM memory caches directly on the physical hypervisor server before data flows over the network.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 159; MS Learn Intro to Azure Virtual Machines, Unit 4"
  },
  {
    "id": "p05-m01-19",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Virtual Machines - Azure Resource Mover",
    "question": "Which Azure service coordinates moving virtual machines and dependent networking resources across different Azure regions?",
    "answer": "Azure Resource Mover.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 158; MS Learn Intro to Azure Virtual Machines, Unit 3"
  },
  {
    "id": "p05-m05-15",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure Container Apps (ACA) - Value Proposition",
    "question": "How does Azure Container Apps (ACA) differ from Azure Container Instances (ACI)?",
    "answer": "ACA is a serverless microservices platform built on AKS supporting dynamic traffic revisions, ingress, and Dapr, whereas ACI is for simple isolated tasks.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 180; MS Learn Configure ACI, Unit 2"
  },
  {
    "id": "p05-m05-16",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Azure Container Apps - KEDA Autoscaling",
    "question": "Which open-source scaling framework embedded in Azure Container Apps enables event-driven scaling down to zero replicas?",
    "answer": "KEDA (Kubernetes Event-driven Autoscaling).",
    "source": "Exam Ref AZ-104, Ch. 3, p. 181; MS Learn Configure ACI, Unit 3"
  },
  {
    "id": "p05-m01-20",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Virtual Machines - Generation 2 UEFI Boot Architecture",
    "question": "What key features are enabled when you create a Generation 2 Azure Virtual Machine instead of Generation 1?",
    "answer": "Generation 2 VMs support UEFI boot architecture (replacing legacy BIOS), OS boot disks larger than 2 TB, and Trusted Launch security (vTPM and Secure Boot).",
    "source": "Exam Ref AZ-104, Ch. 3, p. 146; MS Learn Intro to Azure Virtual Machines, Unit 3"
  },
  {
    "id": "p05-m01-21",
    "section": "05-deploy-and-manage-compute-resources",
    "topic": "Virtual Machines - Linux Authentication Best Practice",
    "question": "When creating a Linux virtual machine in Azure, what is Microsoft's recommended credential authentication method?",
    "answer": "SSH public key authentication (RSA-4096 or ED25519), avoiding single-factor password authentication on port 22.",
    "source": "Exam Ref AZ-104, Ch. 3, p. 145; MS Learn Intro to Azure Virtual Machines, Unit 3"
  },
  {
    "id": "p06-m01-01",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Backup - Vault Types",
    "question": "What are the two types of backup vaults used in Azure?",
    "answer": "Recovery Services Vault (for VMs, SQL in VM, Azure Files) and Backup Vault (for Azure Disks, PostgreSQL, Blob backup, AKS).",
    "source": "Exam Ref AZ-104, Ch. 5, p. 331; MS Learn Intro Azure Backup, Unit 2"
  },
  {
    "id": "p06-m01-02",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Backup - Soft Delete Retention Period",
    "question": "How long is deleted backup data retained under the default Soft Delete feature in a Recovery Services Vault?",
    "answer": "14 additional days (at no extra cost to prevent accidental or ransomware deletion).",
    "source": "Exam Ref AZ-104, Ch. 5, p. 334; MS Learn Intro Azure Backup, Unit 3"
  },
  {
    "id": "p06-m01-03",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Backup - Cross-Region Restore (CRR)",
    "question": "What does Cross-Region Restore (CRR) allow an administrator to do?",
    "answer": "Restore backups directly into the secondary paired region at any time, even when the primary region is fully operational.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 333; MS Learn Intro Azure Backup, Unit 3"
  },
  {
    "id": "p06-m01-04",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Backup - Vault Redundancy Changing Rule",
    "question": "When can you change the storage replication type (LRS/GRS/ZRS) of a Recovery Services Vault?",
    "answer": "Only before any backup items or policies are protected in the vault.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 332; MS Learn Intro Azure Backup, Unit 2"
  },
  {
    "id": "p06-m01-05",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Backup - MARS Agent Scope",
    "question": "What workload types can the Microsoft Azure Recovery Services (MARS) agent back up?",
    "answer": "Files and folders and system state on Windows machines directly to Azure (no Linux or application support).",
    "source": "Exam Ref AZ-104, Ch. 5, p. 335; MS Learn Intro Azure Backup, Unit 4"
  },
  {
    "id": "p06-m01-06",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Backup - Immutable Vault Feature",
    "question": "What does an Immutable Vault in Azure Backup prevent?",
    "answer": "Prevents backup data, retention policies, and recovery points from being deleted or modified by any user, including Subscription Owners.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 334"
  },
  {
    "id": "p06-m01-07",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Backup - MABS vs MARS",
    "question": "Which on-premises backup tool supports application-aware backups (SQL, Exchange, SharePoint) to Azure: MARS or MABS?",
    "answer": "Microsoft Azure Backup Server (MABS).",
    "source": "Exam Ref AZ-104, Ch. 5, p. 336; MS Learn Intro Azure Backup, Unit 4"
  },
  {
    "id": "p06-m01-08",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Backup - Regional Alignment",
    "question": "Can a Recovery Services Vault back up an Azure Virtual Machine located in a different Azure region?",
    "answer": "No, the vault and the target Azure VM must reside in the exact same Azure region.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 332; MS Learn Intro Azure Backup, Unit 2"
  },
  {
    "id": "p06-m01-09",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Backup - Enhanced Backup Policy Features",
    "question": "What capabilities are added with an Enhanced VM Backup Policy?",
    "answer": "Multiple backups per day (every 4 hours), Zone-redundant snapshots, and support for Trusted Launch / Confidential VMs.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 337"
  },
  {
    "id": "p06-m01-10",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Backup - MARS Passphrase Storage",
    "question": "Where is the encryption passphrase stored when configuring the MARS agent?",
    "answer": "Only locally on the client machine; Microsoft does not possess the passphrase and cannot recover it if lost.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 335"
  },
  {
    "id": "p06-m01-11",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Backup - Security PIN Purpose",
    "question": "What is the purpose of the Security PIN generated in the Recovery Services Vault?",
    "answer": "It provides a temporary one-time password required when performing sensitive operations like disabling soft delete or stopping protection.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 334"
  },
  {
    "id": "p06-m01-12",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Backup - Backup Center Overview",
    "question": "What Azure management console provides unified, multi-subscription, multi-vault backup governance and monitoring?",
    "answer": "Azure Backup Center.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 338; MS Learn Intro Azure Backup, Unit 5"
  },
  {
    "id": "p06-m01-13",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Backup - Operational vs Vaulted Tier",
    "question": "What is the difference between the Operational tier and Vaulted tier in Azure Backup?",
    "answer": "Operational tier stores local snapshots with zero data transfer for quick restore; Vaulted tier transfers and retains data long-term in the vault.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 333"
  },
  {
    "id": "p06-m01-14",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Backup - CRR Target Region Prerequisites",
    "question": "Which storage replication setting must be chosen when creating the vault to enable Cross-Region Restore?",
    "answer": "Geo-Redundant Storage (GRS).",
    "source": "Exam Ref AZ-104, Ch. 5, p. 333; MS Learn Intro Azure Backup, Unit 3"
  },
  {
    "id": "p06-m01-15",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Backup - Soft Delete Disabling Delay",
    "question": "When Soft Delete is turned off in a vault, are existing soft-deleted items deleted immediately?",
    "answer": "No, existing soft-deleted items remain retained for the full 14 days; the change only affects future deletions.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 334"
  },
  {
    "id": "p06-m01-16",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Backup - Azure Files Backup Method",
    "question": "How does Azure Backup protect Azure File Shares natively?",
    "answer": "By taking and orchestrating native Azure File Share snapshots without requiring any agent or data movement.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 337; MS Learn Intro Azure Backup, Unit 2"
  },
  {
    "id": "p06-m02-01",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Protect Azure VMs - VM Backup Extension",
    "question": "What VM extension does Azure Backup automatically inject into a VM to coordinate point-in-time snapshots?",
    "answer": "`VMSnapshot` on Windows, and `VMSnapshotLinux` on Linux.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 340; MS Learn Protect VMs with Backup, Unit 2"
  },
  {
    "id": "p06-m02-02",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Protect Azure VMs - Application-Consistent Backup",
    "question": "What is an Application-Consistent backup of an Azure VM?",
    "answer": "A backup where memory buffers and pending I/O transactions are flushed to disk before snapshotting (using VSS on Windows or pre/post scripts on Linux).",
    "source": "Exam Ref AZ-104, Ch. 5, p. 341; MS Learn Protect VMs with Backup, Unit 3"
  },
  {
    "id": "p06-m02-03",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Protect Azure VMs - File-System Consistent Backup",
    "question": "When does an Azure VM backup register as File-System Consistent instead of Application-Consistent?",
    "answer": "When disk write operations are completed and the file system is consistent, but applications (like SQL) did not flush in-memory state via VSS.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 341; MS Learn Protect VMs with Backup, Unit 3"
  },
  {
    "id": "p06-m02-04",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Protect Azure VMs - Crash-Consistent Backup",
    "question": "What defines a Crash-Consistent backup in Azure VM backup?",
    "answer": "A point-in-time snapshot of the disks taken when the VM was shut down, or if the VSS/snapshot extension failed during execution.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 341; MS Learn Protect VMs with Backup, Unit 3"
  },
  {
    "id": "p06-m02-05",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Protect Azure VMs - Instant Restore Duration",
    "question": "What is the configurable retention range for the Instant Restore snapshot tier in an Azure VM backup policy?",
    "answer": "Between 1 and 5 days (default is 2 days).",
    "source": "Exam Ref AZ-104, Ch. 5, p. 342; MS Learn Protect VMs with Backup, Unit 4"
  },
  {
    "id": "p06-m02-06",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Protect Azure VMs - Restore Options Available",
    "question": "Name the four restore options available when restoring an Azure Virtual Machine backup.",
    "answer": "Create New VM, Restore Disks, Replace Existing VM Disks, and Item-Level Recovery (ILR).",
    "source": "Exam Ref AZ-104, Ch. 5, p. 344; MS Learn Protect VMs with Backup, Unit 5"
  },
  {
    "id": "p06-m02-07",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Protect Azure VMs - Item Level Recovery (ILR) Mechanism",
    "question": "How does Item Level Recovery (ILR) allow you to recover specific individual files from an Azure VM backup?",
    "answer": "It generates an executable script that mounts recovery point disks as local iSCSI volumes on any machine for 12 hours.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 345; MS Learn Protect VMs with Backup, Unit 5"
  },
  {
    "id": "p06-m02-08",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Protect Azure VMs - Two Phases of VM Backup",
    "question": "What are the two phases of an Azure VM backup job?",
    "answer": "Phase 1: Taking a local disk snapshot (Instant Restore); Phase 2: Transferring the snapshot data to the Recovery Services Vault.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 340; MS Learn Protect VMs with Backup, Unit 2"
  },
  {
    "id": "p06-m02-09",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Protect Azure VMs - Replace Existing Disk Benefit",
    "question": "What is the operational advantage of the 'Replace Existing' restore option for an Azure VM?",
    "answer": "It swaps the VM's corrupted OS and data disks with the backup disks without changing the VM resource ID, MAC, or IP address.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 344"
  },
  {
    "id": "p06-m02-10",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Protect Azure VMs - GFS Retention Schema",
    "question": "What four retention tiers are available in Grandfather-Father-Son (GFS) backup policies in Azure?",
    "answer": "Daily, Weekly, Monthly, and Yearly retention points.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 343; MS Learn Protect VMs with Backup, Unit 4"
  },
  {
    "id": "p06-m02-11",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Protect Azure VMs - Backup Agent in Guest",
    "question": "Is an agent required inside an Azure Virtual Machine to perform Azure VM backup?",
    "answer": "No, the Azure platform automatically injects the required snapshot extension into the Azure VM agent.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 340"
  },
  {
    "id": "p06-m02-12",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Protect Azure VMs - Selective Disk Backup",
    "question": "Can you exclude specific data disks (such as temporary scratch disks) from an Azure VM backup policy?",
    "answer": "Yes, selective disk backup allows including only the OS disk or specific data disks.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 342"
  },
  {
    "id": "p06-m02-13",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Protect Azure VMs - Outbound Network Requirement for Backup",
    "question": "What outbound network connectivity does an Azure VM require for backup extension communication?",
    "answer": "HTTPS connectivity to Azure public IP ranges (Azure Backup service tags and Azure Storage).",
    "source": "Exam Ref AZ-104, Ch. 5, p. 340; MS Learn Protect VMs with Backup, Unit 2"
  },
  {
    "id": "p06-m02-14",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Protect Azure VMs - Linux Pre/Post Scripts Purpose",
    "question": "What purpose do pre-script and post-script files serve during Linux Azure VM backups?",
    "answer": "They quiesce application I/O and flush cache to disk before snapshotting to ensure Application-Consistent backups on Linux.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 341"
  },
  {
    "id": "p06-m02-15",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Protect Azure VMs - Managed Disks Staging Storage",
    "question": "When restoring disks from a backup, what resource must you designate to receive the restored VHD files?",
    "answer": "A staging Storage Account (or target Resource Group for managed disks).",
    "source": "Exam Ref AZ-104, Ch. 5, p. 344"
  },
  {
    "id": "p06-m02-16",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Protect Azure VMs - ADE Encrypted VM Restore",
    "question": "Can Azure VMs encrypted with Azure Disk Encryption (ADE) be restored using Item-Level Recovery (ILR)?",
    "answer": "No, ILR does not support ADE-encrypted VMs; you must restore the full disk or VM.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 345"
  },
  {
    "id": "p06-m03-01",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Monitor - Metrics vs Logs",
    "question": "What are the two foundational data types collected by Azure Monitor?",
    "answer": "Metrics (numerical time-series values) and Logs (structured textual and record event data).",
    "source": "Exam Ref AZ-104, Ch. 5, p. 310; MS Learn Monitor Azure VMs, Unit 2"
  },
  {
    "id": "p06-m03-02",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Monitor - Metric Retention Duration",
    "question": "How long are standard Azure platform metrics retained in Azure Monitor without additional configuration?",
    "answer": "93 days.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 311; MS Learn Monitor Azure VMs, Unit 2"
  },
  {
    "id": "p06-m03-03",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Monitor - Query Language for Logs",
    "question": "Which query language is used to analyze log data stored in an Azure Log Analytics workspace?",
    "answer": "Kusto Query Language (KQL).",
    "source": "Exam Ref AZ-104, Ch. 5, p. 312; MS Learn Monitor Azure VMs, Unit 3"
  },
  {
    "id": "p06-m03-04",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Monitor - Metric Alerts Stateful Nature",
    "question": "Why are Metric Alerts described as 'stateful' in Azure Monitor?",
    "answer": "They transition to 'Fired' when crossing a threshold and automatically transition to 'Resolved' when metrics return to normal.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 314; MS Learn Monitor Azure VMs, Unit 4"
  },
  {
    "id": "p06-m03-05",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Monitor - Log Search Alerts Stateless Nature",
    "question": "Why are Log Search Alerts described as 'stateless' in Azure Monitor?",
    "answer": "They evaluate scheduled KQL queries and fire independently without automatically resolving based on prior state.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 315; MS Learn Monitor Azure VMs, Unit 4"
  },
  {
    "id": "p06-m03-06",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Monitor - Action Groups Function",
    "question": "What is an Action Group in Azure Monitor?",
    "answer": "A reusable collection of notification preferences (Email, SMS, Push) and automated actions (Webhook, Logic App, Azure Function, Runbook).",
    "source": "Exam Ref AZ-104, Ch. 5, p. 316; MS Learn Monitor Azure VMs, Unit 4"
  },
  {
    "id": "p06-m03-07",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Monitor - Azure Monitor Agent (AMA)",
    "question": "Which unified agent replaces the legacy Log Analytics agent (MMA/OMS) and Diagnostics extension on Azure VMs?",
    "answer": "The Azure Monitor Agent (AMA).",
    "source": "Exam Ref AZ-104, Ch. 5, p. 317; MS Learn Monitor Azure VMs, Unit 3"
  },
  {
    "id": "p06-m03-08",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Monitor - Data Collection Rules (DCR)",
    "question": "What do Data Collection Rules (DCRs) configure for the Azure Monitor Agent?",
    "answer": "They define exactly what telemetry data to collect from VMs (Windows event logs, Syslog, performance counters) and where to send it.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 318; MS Learn Monitor Azure VMs, Unit 3"
  },
  {
    "id": "p06-m03-09",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Monitor - Diagnostic Settings Destinations",
    "question": "What three destinations can Diagnostic Settings stream resource logs and metrics to?",
    "answer": "A Log Analytics Workspace, an Azure Storage Account, and an Azure Event Hub (or Partner solution).",
    "source": "Exam Ref AZ-104, Ch. 5, p. 320; MS Learn Monitor Azure VMs, Unit 5"
  },
  {
    "id": "p06-m03-10",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Monitor - Azure Activity Log Purpose",
    "question": "What events does the Azure Activity Log record, and what is its default retention period?",
    "answer": "Subscription-level control-plane events (resource creation, modification, deletion) retained for 90 days by default.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 321; MS Learn Monitor Azure VMs, Unit 2"
  },
  {
    "id": "p06-m03-11",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Monitor - VM Insights Feature",
    "question": "What capabilities does VM Insights provide beyond basic VM monitoring?",
    "answer": "Predefined performance workbooks and an interactive dependency Map that visualizes network connections across VMs and processes.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 323; MS Learn Monitor Azure VMs, Unit 6"
  },
  {
    "id": "p06-m03-12",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Monitor - Log Retention Range in Workspace",
    "question": "What is the configurable retention range for logs stored in an Azure Log Analytics Workspace?",
    "answer": "Between 30 and 730 days (default is 30 days).",
    "source": "Exam Ref AZ-104, Ch. 5, p. 313; MS Learn Monitor Azure VMs, Unit 3"
  },
  {
    "id": "p06-m03-13",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Monitor - Alert Processing Rules Purpose",
    "question": "What do Alert Processing Rules allow you to do during planned maintenance windows?",
    "answer": "Suppress action group notifications across specific resources without disabling the underlying alert rules.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 319"
  },
  {
    "id": "p06-m03-14",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Monitor - Dynamic Thresholds for Metric Alerts",
    "question": "What do Dynamic Thresholds do in Azure Monitor Metric Alerts?",
    "answer": "They use machine learning to calculate a seasonal baseline of normal behavior and trigger alerts on statistical deviations.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 315; MS Learn Monitor Azure VMs, Unit 4"
  },
  {
    "id": "p06-m03-15",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Monitor - Syslog Facility Collection on Linux",
    "question": "How does Azure Monitor collect operating system logs from Linux virtual machines?",
    "answer": "Via the Syslog daemon (rsyslog or syslog-ng) forwarder configured in the Data Collection Rule.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 318; MS Learn Monitor Azure VMs, Unit 3"
  },
  {
    "id": "p06-m03-16",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Monitor - Application Insights Integration",
    "question": "What is the primary role of Application Insights within the Azure Monitor family?",
    "answer": "Application Performance Management (APM) monitoring code exceptions, request rates, response times, and live telemetry for web applications.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 325"
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
    "id": "p06-m01-18",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Site Recovery (ASR) - Core Role",
    "question": "What is the primary role of Azure Site Recovery (ASR) for Azure Virtual Machines?",
    "answer": "Orchestrating continuous replication, disaster recovery drills, failover, and failback of VMs to a secondary region.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 348; MS Learn Intro to Azure Backup, Unit 2"
  },
  {
    "id": "p06-m01-19",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Site Recovery - Test Failover Drill",
    "question": "How do you test Azure Site Recovery without disrupting production or stopping active replication?",
    "answer": "Execute a 'Test Failover' targeting an isolated non-production virtual network in the recovery region.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 351; MS Learn Intro to Azure Backup, Unit 5"
  },
  {
    "id": "p06-m01-20",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Site Recovery - Planned vs Unplanned Failover",
    "question": "What guarantees zero data loss during an Azure Site Recovery failover?",
    "answer": "Executing a 'Planned Failover', which shuts down the source VM and finishes data synchronization before initiating target failover.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 352; MS Learn Intro to Azure Backup, Unit 5"
  },
  {
    "id": "p06-m03-17",
    "section": "06-monitor-and-back-up-resources",
    "topic": "Azure Backup Reports - Log Analytics Repository",
    "question": "Where does Azure Backup stream diagnostic telemetry to power tenant-wide Backup Reports in Backup Center?",
    "answer": "To an Azure Log Analytics Workspace via vault Diagnostic Settings.",
    "source": "Exam Ref AZ-104, Ch. 5, p. 340; MS Learn Monitor VMs with Azure Monitor, Unit 3"
  }
];
