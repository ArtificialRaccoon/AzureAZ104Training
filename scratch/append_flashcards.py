#!/usr/bin/env python3
"""
scratch/append_flashcards.py
Appends missing topic flashcards to flash-app/decks with guaranteed unique IDs.
"""

import json
import os

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
DECKS_DIR = os.path.join(BASE_DIR, "flash-app", "decks")

ADDITIONAL_CARDS = {
    "path-01.json": [
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
        }
    ],
    "path-02.json": [
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
        }
    ],
    "path-03.json": [
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
        }
    ],
    "path-04.json": [
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
        }
    ],
    "path-05.json": [
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
        }
    ],
    "path-06.json": [
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
    ]
}

def main():
    print("Appending New Flashcards to Decks...")
    for filename, cards in ADDITIONAL_CARDS.items():
        filepath = os.path.join(DECKS_DIR, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            deck = json.load(f)
        existing_ids = set(c["id"] for c in deck)
        added = 0
        for card in cards:
            if card["id"] not in existing_ids:
                deck.append(card)
                added += 1
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(deck, f, indent=2, ensure_ascii=False)
        print(f"  {filename}: Added {added} cards (Total: {len(deck)})")

if __name__ == "__main__":
    main()
