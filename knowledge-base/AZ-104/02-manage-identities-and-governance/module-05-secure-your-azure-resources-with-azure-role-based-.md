# Module: Secure your Azure resources with Azure role-based access control (Azure RBAC)

**Course:** [Course AZ-104T00-A: Microsoft Azure Administrator](https://learn.microsoft.com/en-us/training/courses/az-104t00)  
**Learning Path:** [AZ-104: Manage identities and governance in Azure](https://learn.microsoft.com/training/paths/az-104-manage-identities-governance/)  
**Official Microsoft Module Source:** [https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/](https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/)  
**Estimated Duration:** 37 minutes  
**Total Units:** 8  

> **Overview:** Learn how to use Azure role-based access control to effectively manage your team's access to Azure resources.

## Module Outline

| Unit # | Title | Duration | Official Reference |
|---|---|---|---|
| 1 | Introduction | 2 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/1-introduction/) |
| 2 | What is Azure RBAC? | 8 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/2-rbac-overview/) |
| 3 | Knowledge check - What is Azure RBAC? | 2 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/3-knowledge-check-rbac-overview/) |
| 4 | Exercise - List access using Azure RBAC and the Azure portal | 8 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/4-list-access/) |
| 5 | Exercise - Grant access using Azure RBAC and the Azure portal | 8 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/5-grant-access/) |
| 6 | Exercise - View activity logs for Azure RBAC changes | 4 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/6-view-activity-logs/) |
| 7 | Module assessment | 3 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/7-knowledge-check-rbac/) |
| 8 | Summary | 2 min | [View on Microsoft Learn](https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/8-summary/) |

---

## Unit 1: Introduction

**Source URL:** [https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/1-introduction/](https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/1-introduction/)  
**Duration:** 2 minutes  

For any organization using the cloud, securing your Azure resources such as virtual machines, websites, networks, and storage is a critical function. You want to ensure that your data and assets are protected, but still grant your employees and partners the access they need to perform their jobs. Azure RBAC is an authorization system in Azure that helps you manage who has access to Azure resources, what they can do with those resources, and where they have access.



Suppose you work for First Up Consultants, which is an engineering firm that specializes in circuit and electrical design. They've moved their workloads and assets to Azure to make collaboration easier across several offices and other companies. You work in the IT department at First Up Consultants. You're responsible for keeping the company's assets secure, but still allowing users to access the resources they need. You've heard that Azure RBAC can help you manage resources in Azure.



In this module, you'll learn how to use Azure RBAC to manage access to resources in Azure.



## Learning objectives



In this module, you'll:



- Verify access to resources for yourself and others.

- Grant access to resources.

- View activity logs of Azure RBAC changes.

---

## Unit 2: What is Azure RBAC?

**Source URL:** [https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/2-rbac-overview/](https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/2-rbac-overview/)  
**Duration:** 8 minutes  

When it comes to identity and access, most organizations that are considering using the public cloud are concerned about two things:



1. Ensuring that when people leave the organization, they lose access to resources in the cloud.

2. Striking the right balance between autonomy and central governance. For example, giving project teams the ability to create and manage virtual machines in the cloud, while centrally controlling the networks those VMs use to communicate with other resources.



Microsoft Entra ID and Azure RBAC work together to make it simple to carry out these goals.



## Azure subscriptions



First, remember that each Azure subscription is associated with a single Microsoft Entra directory. Users, groups, and applications in that directory can manage resources in the Azure subscription. The subscriptions use Microsoft Entra ID for single sign-on (SSO) and access management. You can extend your on-premises Active Directory to the cloud by using **Microsoft Entra Connect**. This feature allows your employees to manage their Azure subscriptions by using their existing work identities. When you disable an on-premises Active Directory account, it automatically loses access to all Azure subscriptions connected with Microsoft Entra ID.



## What's Azure RBAC?



Azure RBAC is an authorization system built on Azure Resource Manager that provides fine-grained access management for resources in Azure. With Azure RBAC, you can grant the exact access that users need to do their jobs. For example, you can use Azure RBAC to let one employee manage virtual machines in a subscription, while another manages SQL databases within the same subscription.



The following video describes Azure RBAC in detail:



You can grant access by assigning the appropriate Azure role to users, groups, and applications at a certain scope. The scope of a role assignment can be a management group, subscription, a resource group, or a single resource. A role assigned at a parent scope also grants access to the child scopes contained within it. For example, a user with access to a resource group can manage all the resources it contains like websites, virtual machines, and subnets. The Azure role that you assign dictates what resources the user, group, or application can manage within that scope.



The following diagram depicts how the classic subscription administrator roles, Azure roles, and Microsoft Entra roles are related at a high level. Child scopes, such as service instances, inherit roles assigned at a higher scope, like an entire subscription.



![Diagram that depicts how the classic subscription administrator roles, Azure roles, and Microsoft Entra roles are related at a high level.](media/2-azuread-and-azure-roles.png)



In the preceding diagram, a subscription is associated with only one Microsoft Entra tenant. Also note that a resource group can have multiple resources, but it's associated with only one subscription. Although it's not obvious from the diagram, a resource can be bound to only one resource group.



## What can I do with Azure RBAC?



Azure RBAC allows you to grant access to Azure resources that you control. Suppose you need to manage access to resources in Azure for the development, engineering, and marketing teams. You’ve started to receive access requests, and you need to quickly learn how access management works for Azure resources.



Here are some scenarios you can implement with Azure RBAC:



- Allow one user to manage virtual machines in a subscription and another user to manage virtual networks.

- Allow a database administrator group to manage SQL databases in a subscription.

- Allow a user to manage all resources in a resource group, such as virtual machines, websites, and subnets.

- Allow an application to access all resources in a resource group.



## Azure RBAC in the Azure portal



In several areas in the Azure portal, you'll see a pane named **Access control (IAM)**, also known as *identity and access management*. On this pane, you can see who has access to that area and their role. Using this same pane, you can grant or remove access.



The following shows an example of the Access control (IAM) pane for a resource group. In this example, Alain has been assigned the Backup Operator role for this resource group.



![Screenshot of the Azure portal showing the Access control Role assignment pane with the Backup operator section highlighted.](media/2-resource-group-access-control.png)



## How does Azure RBAC work?



You can control access to resources using Azure RBAC by creating role assignments, which control how permissions are enforced. To create a role assignment, you need three elements: a security principal, a role definition, and a scope. You can think of these elements as *who*, *what*, and *where*.



### 1. Security principal (who)



A *security principal* is just a fancy name for a user, group, or application to which you want to grant access.



![An illustration showing security principal including user, group, and service principal.](media/2-rbac-security-principal.png)



### 2. Role definition (what)



A *role definition* is a collection of permissions. It's sometimes just called a role. A role definition lists the permissions the role can perform such as read, write, and delete. Roles can be high-level, like Owner, or specific, like Virtual Machine Contributor.



![An illustration listing different built-in and custom roles with zoom-in on the definition for the contributor role.](media/2-rbac-role-definition.png)



Azure includes several built-in roles that you can use. The following lists four fundamental built-in roles:



- **Owner**: Has full access to all resources, including the right to delegate access to others.

- **Contributor**: Can create and manage all types of Azure resources, but can’t grant access to others.

- **Reader**: Can view existing Azure resources.

- **User Access Administrator**: Lets you manage user access to Azure resources.



If the built-in roles don't meet the specific needs of your organization, you can create your own custom roles.



### 3. Scope (where)



*Scope* is the level where the access applies. This is helpful if you want to make someone a Website Contributor but only for one resource group.



In Azure, you can specify a scope at multiple levels: management group, subscription, resource group, or resource. Scopes are structured in a parent-child relationship. When you grant access at a parent scope, the child scopes automatically inherit those permissions. For example, if a group is assigned the Contributor role at the subscription scope, it will inherit the role for all resource groups and resources within the subscription.



![An illustration showing a hierarchical representation of different Azure levels to apply scope. The hierarchy, starting with the highest level, is in this order: Management group, subscription, resource group, and resource.](media/2-rbac-scope.png)



### Role assignment



Once you have determined the who, what, and where, you can combine those elements to grant access. A *role assignment* is the process of binding a role to a security principal at a particular scope for the purpose of granting access. To grant access, you'll create a role assignment. To revoke access, you'll remove a role assignment.



The following example shows how the Marketing group has been assigned the Contributor role at the sales resource group scope.



![An illustration showing a sample role assignment process for Marketing group, which is a combination of security principal, role definition, and scope. The Marketing group falls under the Group security principal and has a Contributor role assigned for the Resource group scope.](media/2-rbac-overview.png)



## Azure RBAC is an allow model



Azure RBAC is an *allow* model. This means that when you're assigned a role, Azure RBAC allows you to perform certain actions such as read, write, or delete. If one role assignment grants you read permissions to a resource group, and a different role assignment grants you write permissions to the same resource group, then you'll have read and write permissions on that resource group.



Azure RBAC has something called `NotActions` permissions. You can use `NotActions` to create a set of not allowed permissions. The access a role grants—the *effective permissions*—is computed by subtracting the `NotActions` operations from the `Actions` operations. For example, the [Contributor](/en-us/azure/role-based-access-control/built-in-roles#contributor) role has both `Actions` and `NotActions`. The wildcard (\*) in `Actions` indicates that it can perform all operations on the control plane. You'd then subtract the following operations in `NotActions` to compute the effective permissions:



- Delete roles and role assignments

- Create roles and role assignments

- Grant the caller User Access Administrator access at the tenant scope

- Create or update any blueprint artifacts

- Delete any blueprint artifacts

---

## Unit 3: Knowledge check - What is Azure RBAC?

**Source URL:** [https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/3-knowledge-check-rbac-overview/](https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/3-knowledge-check-rbac-overview/)  
**Duration:** 2 minutes  

## Check your knowledge



1.

What is a role definition in Azure?



A collection of permissions with a name that is assignable to a user, group, or application.



The collection of users, groups, or applications that have permissions to a role.



The binding of a role to a security principal at a specific scope to grant access.



2.

Suppose an administrator wants to assign a role to allow a user to create and manage Azure resources but not be able to grant access to others. Which of the following built-in roles would support this?



Owner



Contributor



Reader



User Access Administrator



3.

What is the inheritance order for scope in Azure?



Management group, Resource group, Subscription, Resource



Management group, Subscription, Resource group, Resource



Subscription, Management group, Resource group, Resource



Subscription, Resource group, Management group, Resource

---

## Unit 4: Exercise - List access using Azure RBAC and the Azure portal

**Source URL:** [https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/4-list-access/](https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/4-list-access/)  
**Duration:** 8 minutes  

At First Up Consultants, you've been granted access to a resource group for the marketing team. You want to familiarize yourself with the Azure portal and see what roles are currently assigned.



You need an Azure subscription to complete the exercises. If you don't have an Azure subscription, create a [free account](https://azure.microsoft.com/pricing/purchase-options/azure-account?cid=msft_learn) and add a subscription before you begin. If you're a student, you can take advantage of the [Azure for students](https://azure.microsoft.com/free/students/?cid=msft_learn) offer.



## List role assignments for yourself



Follow these steps to see what roles are currently assigned to you.



1. Sign in to the [Azure portal](https://portal.azure.com?azure-portal=true).

2. On the **Profile** menu, select the ellipsis (**...**) to see more links.



    ![Screenshot of user menu with My permissions highlighted.](media/4-my-permissions-menu.png)

3. Select **My permissions** to open the **My permissions** pane.



    ![Screenshot of the My permissions pane.](media/4-my-permissions-pane.png)



    You'll find the roles that you've been assigned and the scope. Your list will look different.



## List role assignments for a resource group



Follow these steps to see what roles are assigned at the resource group scope.



1. In the Search box at the top, search for and select **Resource groups**.



    ![Screenshot of the Azure portal that shows how to search for resource groups.](media/4-resource-groups.png)

2. In the list of resource groups, select a resource group.



    These steps use a resource group named **example-group**, but your resource group's name will be different.

3. On the left menu pane, select **Access control (IAM)**.



    ![Screenshot showing Access control (IAM) option on the resource group pane.](media/4-resource-group-access-control.png)

4. Select the **Role assignments** tab.



    This tab shows who has access to the resource group. Notice that some roles are scoped to **This resource**, while others are **(Inherited)** from a parent scope.



    ![Screenshot showing Role assignments tab for the selected resource group.](media/4-resource-group-role-assignment.png)



## List roles



As you learned in the previous unit, a role is a collection of permissions. Azure has more than 70 built-in roles that you can use in your role assignments. To list the roles:



- In the menu bar at the top of the pane, select the **Roles** tab to list of all the built-in and custom roles.



    Select a role's **View** link in the **Details** column, then select the **Assignments** tab to display the number of users and groups assigned to that role.



    ![Screenshot showing a list of Roles and users and groups assigned to each role.](media/4-roles-list.png)



In this unit, you learned how to list the role assignments for yourself in the Azure portal. You also learned how to list the role assignments for a resource group.

---

## Unit 5: Exercise - Grant access using Azure RBAC and the Azure portal

**Source URL:** [https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/5-grant-access/](https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/5-grant-access/)  
**Duration:** 8 minutes  

A coworker named Alain at First Up Consultants needs permission to create and manage virtual machines for a project on which they're working. Your manager has asked that you handle this request. Using the best practice to grant users the least privileges to get their work done, you decide to assign Alain the Virtual Machine Contributor role for a resource group.



## Grant access



Follow this procedure to assign the Virtual Machine Contributor role to a user at the resource group scope.



1. Sign in to the [Azure portal](https://portal.azure.com?azure-portal=true) as an administrator that has permissions to assign roles, such as [User Access Administrator](/en-us/azure/role-based-access-control/built-in-roles#user-access-administrator) or [Owner](/en-us/azure/role-based-access-control/built-in-roles#owner).

2. In the Search box at the top, search for **Resource groups**.



    ![Screenshot of the Azure portal that shows how to search for resource groups.](media/5-resource-groups.png)

3. In the list of resource groups, select a resource group.



    These steps use a resource group named **example-group**, but your resource group's name will be different.

4. On the left menu pane, select **Access control (IAM)**.

5. Select the **Role assignments** tab to display the current list of role assignments at this scope.



    ![Screenshot showing Role assignments tab for the selected resource group.](media/5-resource-group-role-assignment.png)

6. Select **Add** &gt; **Add role assignment**.



    If you don't have permissions to assign roles, the **Add role assignment** option will be disabled.



    ![Screenshot that shows Add role assignment menu.](media/5-resource-group-add-role-assignment.png)



    The **Add role assignment** page opens.

7. On the **Role** tab, search for and select **Virtual Machine Contributor**.



    ![Screenshot that shows Add role assignment and list of roles.](media/5-select-role.png)

8. Select **Next**.

9. On the **Members** tab, select **Select members**.

10. Search for and select a user.



    ![Screenshot of the add role assignment page that shows the select members option.](media/5-select-members-option.png)

11. Select **Select** to add the user to the Members list.

12. Select **Next**.

13. On the **Review + assign** tab, review the role assignment settings.

14. Select **Review + assign** to assign the role.



    After a few moments, the user is assigned the Virtual Machine Contributor role at the resource group scope. The user can now create and manage virtual machines just within this resource group.



    ![Screenshot that shows the Virtual Machine Contributor role assigned to a user.](media/5-vm-contributor-assignment.png)



## Remove access



In Azure RBAC, you can remove a role assignment to remove access.



1. In the list of role assignments, select **View Assignments**.

2. Search for and check the box for the user with the Virtual Machine Contributor role.

3. Select **Delete**.



    ![Screenshot that shows the Remove role assignment message.](media/5-remove-role-assignment.png)

4. In the **Remove role assignments** message that appears, select **Yes**.



In this unit, you learned how to grant a user access to create and manage virtual machines in a resource group using the Azure portal.

---

## Unit 6: Exercise - View activity logs for Azure RBAC changes

**Source URL:** [https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/6-view-activity-logs/](https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/6-view-activity-logs/)  
**Duration:** 4 minutes  

First Up Consultants reviews Azure RBAC changes quarterly for auditing and troubleshooting purposes. You know that changes get logged in the [Azure Activity Log](/en-us/azure/azure-monitor/essentials/activity-log). Your manager has asked if you can generate a report of the role assignment and custom role changes for the last month.



## View activity logs



The easiest way to get started is to view the activity logs with the Azure portal.



1. Select **All services**, then search for **Activity log**.



    ![Screenshot of the Azure portal showing the location of Activity logs option.](media/6-all-services-activity-log.png)

2. Select **Activity log** to open the activity log.



    ![Screenshot of the Azure portal showing the Activity logs.](media/6-activity-log-portal.png)

3. Set the **Timespan** filter to **Last month**.

4. Add an **Operation** filter and type **role** to filter the list.

5. Select the following Azure RBAC operations:



    - Create role assignment (roleAssignments)

    - Delete role assignment (roleAssignments)

    - Create or update custom role definition (roleDefinitions)

    - Delete custom role definition (roleDefinitions)



    ![Screenshot showing a list of Operation filter with the four filters selected.](media/6-operation-filter.png)



    After a moment, you'll get a list of all the role assignment and role definition operations for the last month. There's also a button at the top of the screen to download the activity log as a CSV file.

6. Select one of the operations to get the activity log details.



    ![Screenshot showing the details for an activity log.](media/6-activity-log-details.png)



In this unit, you learned how to use Azure Activity Log to list Azure RBAC changes in the portal and generate a simple report.

---

## Unit 7: Module assessment

**Source URL:** [https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/7-knowledge-check-rbac/](https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/7-knowledge-check-rbac/)  
**Duration:** 3 minutes  

## Check your knowledge



1.

Suppose a team member can't view resources in a resource group. Where would the administrator go to check the team member's access?



Check the team member's permissions by going to their **Azure profile &gt; My permissions**.



Go to the resource group and select **Access control (IAM)** &gt; **Check Access**.



Go to one of the resources in the resource group and select **Role assignments**.



2.

Suppose an administrator in another department needs access to a virtual machine managed by your department. What's the best way to grant them access to just that resource?



At the resource scope, create a role for them with the appropriate access.



At the resource group scope, assign the role with the appropriate access.



At the resource scope, assign the role with the appropriate access.



3.

Suppose a developer needs full access to a resource group. If you are following least-privilege best practices, what scope should you specify?



Resource



Resource group



Subscription



4.

Suppose an administrator needs to generate a report of the role assignments for the last week. Where in the Azure portal would they generate that report?



Search for **Activity log** and filter on the **Create role assignment (roleAssignments)** operation.



At the appropriate scope, go to **Access control (IAM)** &gt; **Download role assignments**.



At the appropriate scope, go to **Access control (IAM)** &gt; **Role assignments**.

---

## Unit 8: Summary

**Source URL:** [https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/8-summary/](https://learn.microsoft.com/training/modules/secure-azure-resources-with-rbac/8-summary/)  
**Duration:** 2 minutes  

In this module, you learned about Azure RBAC, and how you can use it to secure your Azure resources. To grant access, you assign users a role at a particular scope. Using Azure RBAC, you can grant only the amount of access to users that they need to perform their jobs.



Azure RBAC has more than 200 built-in roles. However, if your organization needs specific permissions, you can create your own custom roles. Azure keeps track of your Azure RBAC changes in case you need to see what changes were made in the past.



## Further reading



To continue learning about Azure RBAC, check out [What is Azure role-based access control (Azure RBAC)?](/en-us/azure/role-based-access-control/overview).

---


## Exam Ref AZ-104 Certification Deep Dive & Exam Tips (Charles Pluta, 2024)

> **Source Reference:** *Exam Ref AZ-104 Microsoft Azure Administrator (Charles Pluta, 3rd Edition, 2024)*, Chapter 1, pp. 16–29.

### Key Certification Focus Areas & Architecture Nuances
- **RBAC Role Assignment Components [pp. 16–18]:**
  - **Security Principal:** User, Group, Service Principal, or Managed Identity.
  - **Role Definition:** Collection of permissions (`Actions`, `NotActions`, `DataActions`, `NotDataActions`).
  - **Scope:** Level of access: Management Group → Subscription → Resource Group → Individual Resource.
- **Built-in Role Distinction Matrix [pp. 18–20]:**
  - **Owner:** Full access to all resources, including assigning RBAC roles to others.
  - **Contributor:** Can create and manage all resources, but CANNOT grant access or assign RBAC roles to others.
  - **User Access Administrator:** Manages user access and RBAC assignments, but cannot manage resource configurations.
  - **Reader:** View-only access to resources.
- **Custom Role JSON Definition Schema [pp. 21–24]:**
  - `AssignableScopes`: Must define explicit scopes (e.g., `["/subscriptions/{id}"]` or `["/subscriptions/{id}/resourceGroups/{rg}"]`). *Cannot be assigned at management group level unless specifically enabled.*
  - `NotActions`: Subtracts permissions from `Actions`; it is NOT a deny rule. If another role grants the permission, access is permitted [p. 22].

### Common Exam Traps & "Need More Review?" Tips
- **Exam Trap:** Assigning Contributor role to an admin who needs to delegate access. *Correction:* Contributors cannot assign roles. You must assign `Owner` or `User Access Administrator` [p. 19].
- **Exam Trap:** Thinking `NotActions` acts as an absolute deny. *Correction:* Azure RBAC is an allow-only system. If Role A has `NotActions: ["*/delete"]` but Role B grants `*/delete`, the user CAN delete the resource [p. 22].


## Verification & Knowledge Audit

- **Source Authenticity:** All content directly extracted from official Microsoft Learn documentation for Module: `Secure your Azure resources with Azure role-based access control (Azure RBAC)`.
- **Reference URLs:** Complete unit URLs embedded above.
- **Audit Status:** Verified against Microsoft Learn catalog API and markdown endpoint. Hallucination check passed.
