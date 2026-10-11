# Module: Monitor your Azure virtual machines with Azure Monitor

**Course:** [Course AZ-104T00-A: Microsoft Azure Administrator](https://learn.microsoft.com/en-us/training/courses/az-104t00)  
**Learning Path:** [AZ-104: Monitor and back up Azure resources](https://learn.microsoft.com/training/paths/az-104-monitor-backup-resources/)  
**Official Microsoft Module Source:** [https://learn.microsoft.com/training/modules/monitor-azure-vm-using-diagnostic-data/](https://learn.microsoft.com/training/modules/monitor-azure-vm-using-diagnostic-data/)  
**Estimated Duration:** 35 minutes  
**Total Units:** 7  

> **Overview:** Learn how to monitor your Azure VMs by using Azure Monitor to collect and analyze VM host and client metrics and logs.

## Module Outline

| Unit # | Title | Duration | Official Reference |
|---|---|---|---|
| 1 | Introduction | 2 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/monitor-azure-vm-using-diagnostic-data/1-introduction/) |
| 2 | Monitoring for Azure VMs | 8 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/monitor-azure-vm-using-diagnostic-data/2-monitor-vm-health/) |
| 3 | Monitor VM host data | 6 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/monitor-azure-vm-using-diagnostic-data/3-exercise-create-virtual-machine/) |
| 4 | Use Metrics Explorer to view detailed host metrics | 5 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/monitor-azure-vm-using-diagnostic-data/4-view-host-metrics/) |
| 5 | Collect client performance counters by using VM insights | 5 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/monitor-azure-vm-using-diagnostic-data/5-enable-vm-insights/) |
| 6 | Collect VM client event logs | 7 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/monitor-azure-vm-using-diagnostic-data/6-collect-log-data/) |
| 7 | Summary | 2 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/monitor-azure-vm-using-diagnostic-data/7-summary/) |

---

## Unit 1: Introduction

**Source URL:** [https://learn.microsoft.com/training/modules/monitor-azure-vm-using-diagnostic-data/1-introduction/](https://learn.microsoft.com/training/modules/monitor-azure-vm-using-diagnostic-data/1-introduction/)  
**Duration:** 2 minutes  

Suppose you're the IT administrator for a musical group's website hosted on Azure virtual machines (VMs). The website runs mission-critical services for the group, including ticket booking, venue information, and tour updates. The website must respond quickly and remain accessible during frequent updates and spikes in traffic.



You need to maintain sufficient VM size and memory to effectively host the website without incurring unnecessary costs. You also need to proactively prevent and quickly respond to any access, security, and performance issues. To help achieve these objectives, you want to quickly and easily monitor your VMs' traffic, health, performance, and events.



Azure Monitor provides built-in and customizable monitoring abilities. You can use these to track the health, performance, and behavior of the VM host and the operating system, workloads, and applications running on your VM. This learning module shows you how to view VM host monitoring data, set up recommended alert rules, and use VM insights and custom data collection rules (DCRs) to collect and analyze monitoring data from inside your VMs.



## Prerequisites



To complete this module, you need the following prerequisites:



- Familiarity with virtualization, Azure portal navigation, and Azure VMs.

- Access to an Azure subscription with at least **Contributor** role. If you don't have an Azure subscription, create a [free account](https://azure.microsoft.com/pricing/purchase-options/azure-account?cid=msft_learn) and add a subscription before you begin. If you're a student, you can take advantage of the [Azure for students](https://azure.microsoft.com/free/students/?cid=msft_learn) offer.



## Learning objectives



- Understand which monitoring data you need to collect from your VM.

- Enable and view recommended alerts and diagnostics.

- Use Azure Monitor to collect and analyze VM host data.

- Use Azure Monitor Agent to collect VM client performance metrics and event logs.

---

## Unit 2: Monitoring for Azure VMs

**Source URL:** [https://learn.microsoft.com/training/modules/monitor-azure-vm-using-diagnostic-data/2-monitor-vm-health/](https://learn.microsoft.com/training/modules/monitor-azure-vm-using-diagnostic-data/2-monitor-vm-health/)  
**Duration:** 8 minutes  

In this unit, you explore Azure monitoring capabilities for VMs, and the types of monitoring data you can collect and analyze with Azure Monitor. Azure Monitor is a comprehensive monitoring solution for collecting, analyzing, and responding to monitoring data from Azure and non-Azure resources, including VMs. Azure Monitor has two main monitoring features: Azure Monitor Metrics and Azure Monitor Logs.



Metrics are numerical values collected at predetermined intervals to describe some aspect of a system. Metrics can measure VM performance, resource utilization, error counts, user responses, or any other aspect of the system that you can quantify. Azure Monitor Metrics automatically monitors a predefined set of metrics for every Azure VM, and retains the data for 93 days with some exceptions.



Logs are recorded system events that contain a timestamp and different types of structured or free-form data. Azure automatically records activity logs for all Azure resources. This data is available at the resource level. Azure Monitor doesn't collect logs by default, but you can configure Azure Monitor Logs to collect from any Azure resource. Azure Monitor Logs stores log data in a Log Analytics workspace for querying and analysis.



## VM monitoring layers



Azure VMs have several layers that require monitoring. Each of the following layers has a distinct set of telemetry and monitoring requirements.



- Host VM

- Guest operating system (OS)

- Client workloads

- Applications that run on the VM



![Diagram that shows fundamental VM architecture.](media/monitoring-layers.png)



## Host VM monitoring



The VM host represents the compute, storage, and network resources that Azure allocates to the VM.



### VM host metrics



VM host metrics measure technical aspects of the VM such as processor utilization and whether the machine is running. You can use VM host metrics to:



- Trigger an alert when your VM is reaching its disk or CPU limits.

- Identify trends or patterns.

- Control your operational costs by sizing VMs according to usage and demand.



Azure automatically collects basic metrics for VM hosts. On the VM's **Overview** page in the Azure portal, you can see built-in graphs for the following important VM host metrics.



- VM availability

- CPU usage percentage (average)

- OS disk usage (total)

- Network operations (total)

- Disk operations per second (average)



You can use Azure Monitor Metrics Explorer to plot more metrics graphs, investigate changes, and visually correlate metrics trends for your VMs. With Metrics Explorer you can:



- Plot multiple metrics on a graph to see how much traffic hits your VM and how the VM performs.

- Track the same metric over multiple VMs in a resource group or other scope, and use splitting to show each VM on the graph.

- Select flexible time ranges and granularity.

- Specify many other settings such as chart type and value ranges.

- Send graphs to workbooks or pin them to dashboards for quickly viewing health and performance.

- Group metrics by time intervals, geographic regions, server clusters, or application components.



[![Screenshot showing CPU percentage usage and inbound flow chart.](media/2-vm-metrics-screenshot.png)](media/2-vm-metrics-screenshot.png#lightbox)



### Recommended alert rules



Alerts proactively notify you of specified occurrences and patterns in your VM host metrics. *Recommended alert rules* are a predefined set of alert rules based on commonly monitored host metrics. These rules define recommended CPU, memory, disk, and network usage levels to alert on. The rules also include VM availability, which alerts you when the VM stops running.



You can quickly enable and configure recommended alert rules when you create an Azure VM, or afterwards from the VM's portal page. You can also view, configure, and create custom alerts by using Azure Monitor Alerts.



### Activity logs



Azure Monitor automatically records and displays activity logs for Azure VMs. Activity logs include information like VM startup or modifications. You can create diagnostic settings to send activity logs to the following destinations:



- **Azure Monitor Logs:** For more complex querying and alerting, and for longer retention up to two years.

- **Azure Storage:** For cheaper, long-term archiving.

- **Azure Event Hubs:** To forward outside of Azure.



### Boot diagnostics



Boot diagnostics are host logs you can use to help troubleshoot boot issues with your VMs. You can enable boot diagnostics by default when you create a VM, or afterwards for existing VMs.



Once you enable boot diagnostics, you can see screenshots from the VM's hypervisor for both Windows and Linux machines, and view the serial console log output of the VM boot sequence for Linux machines. Boot diagnostics stores data in a managed storage account.



## Guest OS, client workload, and application monitoring



VM client monitoring can include monitoring the operating system (OS), workloads, and applications that run on the VM. To collect metrics and logs from guest OS and client workloads and applications, you need to install Azure Monitor Agent and set up a DCR.



DCRs define what data to collect and where to send that data. You can use a DCR to send Azure Monitor metrics data, or *performance counters*, to Azure Monitor Logs or Azure Monitor Metrics. You can also send event log data to Azure Monitor Logs. In other words, Azure Monitor Metrics can store only metrics data, but Azure Monitor Logs can store both metrics and event logs.



### VM insights



VM insights is an Azure Monitor feature that helps get you started monitoring your VM clients. VM insights is especially useful for exploring overall VM usage and performance when you don't yet know the metric of primary interest. VM insights provides:



- Simplified Azure Monitor Agent onboarding to enable monitoring a VM's guest OS and workloads.

- A preconfigured DCR that monitors and collects the most common performance counters for Windows and Linux.

- Predefined trending performance metrics charts and workbooks from the VM's guest OS.

- A set of predefined workbooks that show collected VM client metrics over time.

- Optionally, a collection of processes running on the VM, dependencies with other services, and a dependency map that displays interconnected components with other VMs and external sources.



Predefined VM insights workbooks show performance, connections, active ports, traffic, and other collected data from one or several VMs. You can view VM insights data directly from a single VM, or see a combined view of multiple VMs to view and assess trends and patterns across VMs. You can edit the prebuilt workbook configurations, or create your own custom workbooks.



### Client event log data



VM insights creates a DCR that collects a specific set of performance counters. To collect other data, such as event logs, you can create a separate DCR that specifies the data you want to collect from the VM and where to send it. Azure Monitor stores collected log data in a Log Analytics workspace. From there, you can access and analyze the data by using log queries written in Kusto Query Language (KQL).



## Check your knowledge



1.

What are the two main types of monitoring data that Azure Monitor collects for Azure VMs?



Metrics and logs.



VM insights and Alerts.



Workbooks and Workspaces.



2.

What are the layers of a VM that need to be monitored?



VM host OS, SKU, and disks.



VM host, guest OS, client workloads, and applications.



Subscription, resource group, and VM.

---

## Unit 3: Monitor VM host data

**Source URL:** [https://learn.microsoft.com/training/modules/monitor-azure-vm-using-diagnostic-data/3-exercise-create-virtual-machine/](https://learn.microsoft.com/training/modules/monitor-azure-vm-using-diagnostic-data/3-exercise-create-virtual-machine/)  
**Duration:** 6 minutes  

You want to monitor the VMs that host your website, so you decide to quickly create a VM in the Azure portal and evaluate its built-in monitoring capabilities. In this unit, you use the Azure portal to create a Linux VM with recommended alerts and boot diagnostics enabled. As soon as the VM starts up, Azure automatically begins collecting basic metrics and activity logs. You can then view built-in metrics graphs, activity logs, and boot diagnostics.



## Create a VM and enable recommended alerts



1. Sign in to the [Azure portal](https://portal.azure.com?azure-portal=true), and in the Search field, enter *virtual machines*.

2. On the **Virtual machines** page, select **Create**, and then select **Azure virtual machine**.

3. On the **Basics** tab of the **Create a virtual machine** page:



    - In the **Subscription** field, select the correct subscription if not already selected.

    - Under **Resource group**:

        1. Select **Create new**.

        2. Under **Name**, enter *learn-monitor-vm-rg*.

        3. Select **OK**.

    - For **Virtual machine name**, enter *monitored-linux-vm*.

    - For **Image**, select **Ubuntu Server 20.04 LTS - x64 Gen2**.

4. Leave the other settings at their current values, and select the **Monitoring** tab.



    [![Screenshot that shows the Basics tab of the Create a virtual machine page.](media/create-vm-basic.png)](media/create-vm-basic.png#lightbox)

5. On the **Monitoring** tab, select the checkbox next to **Enable recommended alert rules**.

6. On the **Set up recommended alert rules** screen:



    1. Select all the listed alert rules if not already selected, and adjust the values if desired.

    2. Under **Notify me by**, select the checkbox next to **Email**, and enter an email address to receive alert notifications.

    3. Select **Save**.

7. Under **Diagnostics**, for **Boot diagnostics**, ensure that **Enable with managed storage account (recommended)** is selected.



    Note



    Don't select **Enable OS guest diagnostics**. The Linux Diagnostics Agent (LAD) is deprecated, and you can enable OS guest and client monitoring later.

8. Select **Review + create** at the bottom of the page, and when validation passes, select **Create**.



    [![Screenshot that shows the Monitoring tab and alert rule configuration screen of the Create a virtual machine page.](media/create-vm-monitoring.png)](media/create-vm-monitoring.png#lightbox)

9. On the **Generate new key pair** popup dialog box, select **Download private key and create resource**.



It can take a few minutes to create the VM. When you get the notification that the VM is created, select **Go to resource** to see basic metrics data.



## View built-in metrics graphs



Once your VM is created, Azure starts collecting basic metrics data automatically. Built-in metrics graphs, along with the recommended alerts you enabled, can help you monitor whether and when your VM encounters health or performance issues. You can then use more advanced monitoring and analytics capabilities to investigate issue causes and remediation.



1. To view basic metrics graphs, on the VMs **Overview** page, select the **Monitoring** tab.



    [![Screenshot that shows Monitoring tab on a VMs Overview screen.](media/select-monitoring.png)](media/select-monitoring.png#lightbox)

2. Under **Performance and utilization** &gt; **Platform metrics**, review the following metrics graphs related to the VMs performance and utilization. Select **Show more metrics** if all the graphs don't appear immediately.



    - **VM Availability**

    - **CPU (average)**

    - **Disk bytes (total)**

    - **Network (total)**

    - **Disk operations/sec (average)**



    [![Screenshot that shows the platform metrics graphics on the VM Overview page.](media/platform-metrics.png)](media/platform-metrics.png#lightbox)

3. Under **Guest OS metrics**, notice that guest OS metrics aren't being collected yet. In the next units, you configure VM insights and data collection rules to collect guest OS metrics.



## View the activity log



You can view the VMs activity log by selecting **Activity log** from the VMs left navigation menu. You can also retrieve entries by using PowerShell or the Azure CLI.



[![Screenshot of the activity log for a VM.](media/activity-log.png)](media/activity-log.png#lightbox)



## View boot diagnostics



You enabled boot diagnostics when you created the VM. You can view boot diagnostics to view boot data and troubleshoot startup issues.



1. In the left navigation menu for the VM, select **Boot diagnostics** under **Help**.

2. On the **Boot diagnostics** page, select **Screenshot** to see a startup screenshot from the VMs hypervisor. Select **Serial log** to view log messages created when the VM started.



    [![Screenshot that shows the boot diagnostic image captured.](media/3-boot-diagnostics.png)](media/3-boot-diagnostics.png#lightbox)



## Check your knowledge



1.

What do you need to do to enable recommended alert rules when you create a VM?



Nothing, they're enabled by default.



Go to **Alerts** and select **Create**.



Select **Enable recommended alert rules** on the **Monitoring** tab.



2.

Which metrics graph isn't available by default on the **Monitoring** tab when you create a VM?



VM Availability



Guest OS Available Memory



Percentage CPU (average)

---

## Unit 4: Use Metrics Explorer to view detailed host metrics

**Source URL:** [https://learn.microsoft.com/training/modules/monitor-azure-vm-using-diagnostic-data/4-view-host-metrics/](https://learn.microsoft.com/training/modules/monitor-azure-vm-using-diagnostic-data/4-view-host-metrics/)  
**Duration:** 5 minutes  

You want to investigate how traffic flowing into your VM affects its CPU capability. If the built-in metrics charts for a VM don't already show the data you need, you can use Metrics Explorer to create customized metrics charts. In this unit, you plot a graph that displays your VM's maximum percentage CPU and average inbound flow data together.



Azure Monitor Metrics Explorer offers a UI for exploring and analyzing VM metrics. You can use Metrics Explorer to view and create custom charts for many VM host metrics in addition to the metrics shown on the built-in graphs.



## Understand Metrics Explorer



To open Metrics Explorer, you can:



- Select **Metrics** from the VM's left navigation menu under **Monitoring**.

- Select the **See all Metrics** link next to **Platform metrics** on the **Monitoring** tab of the VM's **Overview** page.

- Select **Metrics** from the left navigation menu on the Azure Monitor **Overview** page.



[![Screenshot that shows Metrics Explorer.](media/metrics-explorer.png)](media/metrics-explorer.png#lightbox)



In Metrics Explorer, you can select the following values from the dropdown fields:



- **Scope:** If you open Metrics Explorer from a VM, this field is prepopulated with the VM name. You can add more items with the same resource type (VMs) and location.

- **Metric Namespace**: Most resource types have only one namespace, but for some types, you must pick a namespace. For example, storage accounts have separate namespaces for files, tables, blobs, and queues.

- **Metric**: Each metrics namespace has many metrics available to choose from.

- **Aggregation**: For each metric, Metrics Explorer applies a default aggregation. You can use a different aggregation to get different information about the metric.



You can apply the following aggregation functions to metrics:



- **Count**: Counts the number of data points.

- **Average (Avg)**: Calculates the arithmetic mean of values.

- **Maximum (Max)**: Identifies the highest value.

- **Minimum (Min)**: Identifies the lowest value.

- **Sum**: Adds up all the values.



You can select flexible time ranges for graphs from the past 30 minutes to the last 30 days, or custom ranges. You can specify time interval granularity from one minute to one month.



## Create a metrics graph



To create a Metrics Explorer graph that shows host VM maximum percentage CPU and inbound flows together for the past 30 minutes:



1. Open **Metrics Explorer** by selecting **See all Metrics** on the VM's **Monitoring** tab or selecting **Metrics** from the VM's left navigation menu.

2. **Scope** and **Metric Namespace** are already populated for the host VM. Select **Percentage CPU** from the **Metrics** dropdown list.

3. **Aggregation** is automatically populated with **Avg**, but change it to **Max**.



    [![Screenshot of the Percentage CPU metrics graph for a VM.](media/3-view-host-level-metrics.png)](media/3-view-host-level-metrics.png#lightbox)

4. Select **Add metric** at upper left.

5. Under **Metric**, select **Inbound Flows**. Leave **Aggregation** at **Avg**.

6. At upper right, select **Local Time: Last 24 hours (Automatic - 15 minutes)**, change it to **Last 30 minutes**, and select **Apply**.



Your graph should look similar to the following screenshot:



[![Screenshot that shows a graph of CPU usage and inbound traffic.](media/3-metric-graph.png)](media/3-metric-graph.png#lightbox)



## Check your knowledge



1.

How do you add another metric to an existing Metrics Explorer graph?



Select the metric from the dropdown list in the **Metric** field.



Select **New chart**.



Select **Add metric**.



2.

Which of these parameters isn't included in the dropdown fields when you define a Metrics Explorer graph?



Metric Namespace



Time range



Aggregation

---

## Unit 5: Collect client performance counters by using VM insights

**Source URL:** [https://learn.microsoft.com/training/modules/monitor-azure-vm-using-diagnostic-data/5-enable-vm-insights/](https://learn.microsoft.com/training/modules/monitor-azure-vm-using-diagnostic-data/5-enable-vm-insights/)  
**Duration:** 5 minutes  

Besides monitoring your VM host's health, utilization, and performance, you need to monitor the software and processes running on your VM. These are called the VM guest or client. In this unit, you enable the Azure Monitor VM insights feature, which offers a quick way to start monitoring the VM client.



The VM client includes the operating system and other workloads and applications. To monitor the software running on your VM, you install the Azure Monitor Agent, which collects data from inside the VM. VM insights:



- Installs Azure Monitor Agent on your VM.

- Creates a DCR that collects and sends a predefined set of client performance data to a Log Analytics workspace.

- Presents the data in curated workbooks.



Although you don't need to use VM insights to install Azure Monitor Agent, create DCRs, or set up workbooks, VM insights makes setting up VM client monitoring easy. VM insights provides you with a basis for monitoring the performance of your VM client and mapping the processes running on your machine.



## Enable VM insights



1. In the Azure portal, on your VM's **Overview** page, select **Insights** from the left navigation menu under **Monitoring**.

2. On the **Insights** page, select **Enable**.

3. Under **Data collection rule**, note the properties of the DCR that VM insights creates. In the DCR description, **Processes and dependencies (Map)** is set to **Disabled**, which you can change to **Enabled** or review [this article on how-to](/en-us/azure/azure-monitor/vm/vminsights-maps) if greyed out. Also a default **Log Analytics workspace** is created or assigned.

4. Select **Configure**.



    [![Screenshot that shows enabling and configuring VM insights.](media/enable-insights.png)](media/enable-insights.png#lightbox)



    Configuration of the workspace and the agent installation typically takes 5 to 10 minutes. It can take another 5 to 10 minutes for data to become available to view in the portal.

5. When the deployment finishes, confirm that the Azure Monitor Agent is installed by looking on the **Properties** tab of the VM's **Overview** page under **Extensions + applications**.



    On the **Monitoring** tab of the **Overview** page, under **Performance and utilization**, you can see that **Guest OS metrics** are now being collected.



    [![Screenshot that shows Guest OS metrics on the VM's Monitoring tab.](media/guest-os-metrics.png)](media/guest-os-metrics.png#lightbox)



## View VM insights



VM insights creates a DCR that sends client VM performance counters to Azure Monitor Logs. Because the DCR sends its metrics to Azure Monitor Logs, you don't use Metrics Explorer to view the metrics data that VM insights collects.



To view the VM insights performance graphs and maps:



1. Select **Insights** from the VM's left navigation menu under **Monitoring**.

2. Near the top of the **Insights** page, select the **Performance** tab. The prebuilt VM insights Performance workbook shows charts and graphs with performance-related data for the current VM.



    [![Screenshot that shows the prebuilt VM insights Performance workbook.](media/vm-insights-performance.png)](media/vm-insights-performance.png#lightbox)



    - You can customize the view by specifying a different **Time range** at the top of the page and different aggregations at the top of each graph.

    - Select **View Workbooks** to select from other available prebuilt VM insights workbooks. Select **Go To Gallery** to select from a gallery of other VM insights workbooks and workbook templates, or to edit and create your own workbooks.

3. If enabled earlier, select the **Map** tab on the **Insights** page to see the workbook for the Map feature. The map visualizes the VM's dependencies by discovering running process groups and processes that have active network connections over a specified time range.



    [![Screenshot that shows a dependency map on the Map tab of VM insights.](media/dependency-map.png)](media/dependency-map.png#lightbox)



## Check your knowledge



1.

What capabilities does enabling VM insights provide?



Prebuilt client performance workbooks and guest OS metrics.



Graphs that show several host metrics on one graph with customizable timeframes.



Azure VM log collection and analytics.



2.

What's a quick way to install the Azure Monitor Agent to collect guest OS metrics?



Install the diagnostics extension under **Diagnostics settings**.



You don't have to install or enable anything to use the Azure Monitor Agent to collect guest OS metrics.



Select the **Azure Monitor Agent** when you enable VM insights.

---

## Unit 6: Collect VM client event logs

**Source URL:** [https://learn.microsoft.com/training/modules/monitor-azure-vm-using-diagnostic-data/6-collect-log-data/](https://learn.microsoft.com/training/modules/monitor-azure-vm-using-diagnostic-data/6-collect-log-data/)  
**Duration:** 7 minutes  

Azure Monitor Metrics and VM insights performance counters help you identify performance anomalies, and alert when thresholds are reached. But to analyze the root causes of issues you detect, you need to analyze log data to see which system events caused or contributed to the issues. In this unit, you set up a DCR to collect Linux VM Syslog data, and view the log data in Azure Monitor Log Analytics by using a simple Kusto Query Language (KQL) query.



VM insights installs the Azure Monitor Agent, and creates a DCR that collects predefined performance counters, maps process dependencies, and presents the data in prebuilt workbooks. You can create your own DCRs to collect VM performance counters that the VM insights DCR doesn't collect, or to collect log data.



When you create DCRs in the Azure portal, you can select from a range of performance counters and sampling rates or add custom performance counters. Alternatively, you can select from a predefined set of log types and severity levels or define custom log schemas. You can associate a single DCR to any or all VMs in your subscription, but you might need multiple DCRs to collect different types of data from different VMs.



## Create a DCR to collect log data



In the Azure portal, search for and select *monitor* to go to the Azure Monitor **Overview** page.



[![Screenshot that shows the Azure Monitor Overview page.](media/monitor-overview.png)](media/monitor-overview.png#lightbox)



### Create a Data Collection Endpoint



You must have a data collection endpoint to send log data to. To create an endpoint:



1. In the Azure Monitor left navigation menu under **Settings**, select **Data Collection Endpoints**.

2. On the **Data Collection Endpoints** page, select **Create**.

3. On the **Create data collection endpoint** page, for **Name**, enter *linux-logs-endpoint*.

4. Select the same **Subscription**, **Resource group**, and **Region** as your VM uses.

5. Select **Review + create**, and when validation passes, select **Create**.



### Create the Data Collection Rule



To create the DCR to collect the event logs:



1. In the Monitor left navigation menu under **Settings**, select **Data Collection Rules**.

2. On the **Data Collection Rules** page, you can see the DCR that VM insights created. Select **Create** to create a new data collection rule.



    [![Screenshot of the Data Collection Rules screen with Create highlighted.](media/dcr-create.png)](media/dcr-create.png#lightbox)

3. On the **Basics** tab of the **Create Data Collection Rule** screen, provide the following information:



    - **Rule name**: Enter *collect-events-linux*.

    - **Subscription**, **Resource Group**, and **Region**: Select the same as for your VM.

    - **Platform Type**: Select **Linux**.

4. Select **Next: Resources** or the **Resources** tab.



    [![Screenshot of the Basics tab of the Create Data Collection Rule screen.](media/create-dcr-basics.png)](media/create-dcr-basics.png#lightbox)

5. On the **Resources** screen, select **Add resources**.

6. On the **Select a scope** screen, select the **monitored-linux-vm** VM, and then select **Apply**.

7. On the **Resources** screen, select **Enable Data Collection Endpoints**.

8. Under **Data collection endpoint** for the **monitored-linux-vm**, select the **linux-logs-endpoint** you created.

9. Select **Next: Collect and deliver**, or the **Collect and deliver** tab.



    [![Screenshot of the Resources tab of the Create Data Collection Rule screen.](media/create-dcr-resources.png)](media/create-dcr-resources.png#lightbox)

10. On the **Collect and deliver** tab, select **Add data source**.

11. On the **Add data source** screen, under **Data source type**, select **Linux Syslog**.

12. On the **Add data source** screen, select **Next: Destination** or the **Destination** tab, and make sure the **Account or namespace** matches the Log Analytics workspace that you want to use. You can use the default Log Analytics workspace that VM insights set up, or create or use another Log Analytics workspace.

13. On the **Add data source** screen, select **Add data source**.

14. On the **Create Data Collection Rule** screen, select **Review + create**, and when validation passes, select **Create**.



    [![Screenshot of Review + create highlighted on the Create Data Collection Rule screen.](media/create-dcr-finish.png)](media/create-dcr-finish.png#lightbox)



## View log data



You can view and analyze the log data collected by your DCR by using KQL log queries. A set of sample KQL queries is available for VMs, but you can write a query to look at the events your DCR is collecting.



1. On your VM's **Overview** page, select **Logs** from the left navigation menu under **Monitoring**. Log Analytics opens an empty query window with the scope set to your VM.



    You can also access log data by selecting **Logs** from the left navigation of the Azure Monitor **Overview** page. If necessary, select **Select scope** at the top of the query window to scope the query to the desired Log Analytics workspace and VM.



    Note



    The **Queries** window with sample queries might open when you open Log Analytics. For now, close this window, because you're going to manually create a simple query.

2. In the empty query window, type *Syslog*, and then select **Run**. All the system log events the DCR collected within the **Time range** are displayed.

3. You can refine your query to identify events of interest. For example, you can display only the events that had a **SeverityLevel** of **warning**.



    [![Screenshot that shows the events returned from the Syslog by the DCR.](media/dcr-log.png)](media/dcr-log.png#lightbox)



## Check your knowledge



1.

How can you collect event log data from your VMs?



Create a DCR.



Enable VM insights.



Enable boot diagnostics.



2.

How can you view log data collected by a DCR?



In the **Monitoring** tab of your VM **Overview** page.



By selecting **Data Collection Rules** in Azure Monitor.



By using a KQL query in your Log Analytics workspace.

---

## Unit 7: Summary

**Source URL:** [https://learn.microsoft.com/training/modules/monitor-azure-vm-using-diagnostic-data/7-summary/](https://learn.microsoft.com/training/modules/monitor-azure-vm-using-diagnostic-data/7-summary/)  
**Duration:** 2 minutes  

Azure Monitor helps you collect, analyze, and alert on various types of host and client monitoring data from your Azure VMs.



- Azure Monitor provides a set of VM host logs and performance and usage metrics for all Azure VMs.

- You can enable recommended alert rules when you create VMs or afterwards to alert on important VM host metrics.

- Azure Monitor Metrics Explorer lets you graph and analyze metrics for Azure VMs and other resources.

- VM insights provides a simple way to monitor important VM client performance counters and processes running on your VM.

- You can create data collection rules to collect other metrics and logs from your VM client.

- You can use Log Analytics to query and analyze log data.



Now that you understand these tools, you're confident that Azure Monitor can effectively monitor your Azure VMs and help you keep your website running effectively.



## Clean up resources



In this module, you created a VM in your Azure subscription. To prevent further charges for this VM, you can delete it or the resource group that contains it.



To delete the resource group that contains the VM and its resources:



1. Select the **Resource group** link at the top of the **Essentials** section on the VM's **Overview** page.

2. At the top of the resource group page, select **Delete resource group**.

3. On the delete screen, select the checkbox next to **Apply force delete for selected virtual machines and virtual machine scale sets**. Enter the resource group name in the field, and then select **Delete**.



## Learn more



To learn more about monitoring your VMs with Azure Monitor, see the following resources:



- [Azure Monitor documentation](/en-us/azure/azure-monitor)

- [Monitor virtual machines with Azure Monitor](/en-us/azure/azure-monitor/vm/monitor-virtual-machine)

- [Supported metrics with Azure Monitor](/en-us/azure/azure-monitor/reference/supported-metrics/metrics-index)

- [Send Azure Monitor Activity log data](/en-us/azure/azure-monitor/essentials/activity-log)

- [Supported metrics for Microsoft.Compute/virtualMachines](/en-us/azure/azure-monitor/reference/supported-metrics/microsoft-compute-virtualmachines-metrics)

- [Overview of VM insights](/en-us/azure/azure-monitor/vm/vminsights-overview)

- [Create interactive reports with VM insights workbooks](/en-us/azure/azure-monitor/vm/vminsights-workbooks)

- [Use the Map feature of VM insights to understand application components](/en-us/azure/azure-monitor/vm/vminsights-maps)

- [Azure Monitor Agent overview](/en-us/azure/azure-monitor/agents/azure-monitor-agent-overview)

- [Collect data with Azure Monitor Agent](/en-us/azure/azure-monitor/agents/azure-monitor-agent-data-collection)

- [Tutorial: Collect guest logs and metrics from an Azure virtual machine](/en-us/azure/azure-monitor/vm/tutorial-monitor-vm-guest)

---


## Exam Ref AZ-104 Certification Deep Dive & Exam Tips (Charles Pluta, 2024)

> **Source Reference:** *Exam Ref AZ-104 Microsoft Azure Administrator (Charles Pluta, 3rd Edition, 2024)*, Chapter 5, pp. 292–327.

### Key Certification Focus Areas & Architecture Nuances
- **Metrics vs. Logs in Azure Monitor [pp. 294–307]:**
  - **Metrics:** Numerical values sampled at regular intervals; stored in lightweight time-series database; near real-time alerts. Retained for 93 days.
  - **Logs:** Structured and unstructured events, telemetry, and performance data stored in Log Analytics; queried using Kusto Query Language (KQL).
- **Azure Monitor Agent (AMA) & Data Collection Rules (DCR) [pp. 299–304]:**
  - The legacy Log Analytics Agent (MMA/OMS) is retired; replaced by **Azure Monitor Agent (AMA)**.
  - Managed centrally using **Data Collection Rules (DCR)** defining what data to collect and where to send it.
- **Alert Types & Action Groups [pp. 311–321]:**
  - **Metric Alerts:** Stateful; fires when threshold crossed, auto-resolves when value returns to normal.
  - **Log Search Alerts:** Stateless; executes KQL query on schedule; fires if query returns matching records.
  - **Action Groups:** Reusable notifications (Email, SMS, Push, Voice) and automations (Azure Function, Logic App, Webhook, Automation Runbook, ITSM).
  - **Alert Processing Rules:** Apply actions (e.g. suppress notifications during maintenance windows) to alerts after they fire.

### Common Exam Traps & "Need More Review?" Tips
- **Exam Trap:** Silencing alerts during scheduled server maintenance by modifying individual alert rules. *Correction:* Use an **Alert Processing Rule** with a planned suppression schedule [pp. 319–320].


## Verification & Knowledge Audit

- **Source Authenticity:** All content directly extracted from official Microsoft Learn documentation for Module: `Monitor your Azure virtual machines with Azure Monitor`.
- **Reference URLs:** Complete unit URLs embedded above.
- **Audit Status:** Verified against Microsoft Learn catalog API and markdown endpoint. Hallucination check passed.
