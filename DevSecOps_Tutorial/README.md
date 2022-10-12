# DevSecOps_Tutorial
Repo for demonstration how to implement the Github free Security features.

New line

# Table of contents:

- [Quickstart](#quickstart)
- [Pre-reqs](#pre-reqs)
- [Getting started](#getting-started)
- [Docker commands](#docker-commands)
- [Notes](#notes)

# Quickstart
- To build the docker image
```
npm run build
```
- To start the docker container
```
npm run start
```
The application is now serving and available at `localhost:80` and 
`127.0.0.1:80`

# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)
- Install [Docker](https://www.docker.com/products/docker-desktop/)
- Install [VS Code](https://code.visualstudio.com/)

# Getting started

- Clone the repository
```
git clone https://github.com/Cyber-JiuJiteria/DevSecOps_Tutorial.git
```
- Navigate to root of the repository
```
cd DevSecOps_Tutorial/
```
- To build the docker image
```
npm run build
```
- To start the docker container
```
npm run start
```
- The container is now started and serving HTML content to the specified 
port.
- In the `Package.json start` script, we can see we specified port 80 with 
`--p 80:80`
- Thus, the Web Page will be serving content on `localhost:80` and 
`127.0.0.1:80` in any browser

# Docker commands
- List containers to get container id
```
docker container ls
```
- Stop a container
```
docker stop <CONTAINER_ID>
```
- Delete a container
```
docker rm <CONTAINER_ID>
```

# Notes
- Before starting a new container, be sure to create a new image and stop 
the current container. Only one container can run on a single port.
- The HTML that we see is being served via an NGINX web server. NGINX 
serves to port 80 by default
-To alter the port we serve HTML to, simply alter the left number in the 
`-p 80:80` command
- For example, to serve to `localhost:3000` alter the `run` script to 
`docker run -d -p 3000:80 devsecops_tutorial`

# Code Scanning using CodeQL

*Code scanning is available for all public repositories on 
[Github.com](http://Github.com)

## **What is Code Scanning?**

---

**Automatically scanning your code for vulnerabilities and errors.**

*You can find vulnerabilities and errors in your project’s code on Github, 
as well as view, triage, understand, and resolve the related code scanning 
alerts.*

## About Code Scanning

---

[https://docs.github.com/en/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning](https://docs.github.com/en/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)

Code scanning is a feature that you use to analyze the code in a GitHub 
repository to find security vulnerabilities and coding errors. Any 
problems identified by the analysis are shown in GitHub.

You can use code scanning to find, triage, and prioritize fixes for 
existing problems in your code. Code scanning also prevents developers 
from introducing new problems. You can schedule scans for specific days 
and times, or trigger scans when a specific event occurs in the 
repository, such as a push.

If code scanning finds a potential vulnerability or error in your code, 
GitHub displays an alert in the repository. After you fix the code that 
triggered the alert, GitHub closes the alert.

## Tools for Code Scanning

---

You can set up code scanning to use the CodeQL product maintained by 
GitHub or a third-party code scanning tool. We will be covering CodeQL 
only, being that this is what GitHub offers.

**About CodeQL analysis**

CodeQL is the code analysis engine developed by GitHub to automate 
security checks. You can analyze your code using CodeQL and display the 
results as code scanning alerts.

## Setting up code scanning for a repository

---

You decide how to generate code scanning alerts, and which tools to use, 
at a repository level. GitHub provides fully integrated support for CodeQL 
analysis, and also supports analysis using third-party tools.

If you run code scanning using multiple configurations, then sometimes an 
alert will have multiple analysis origins. If an alert has multiple 
analysis origins, you can view the status of the alert for each analysis 
origin on the alert page.

**Setting up code scanning using starter workflows**

GitHub provides starter workflows for security features such as code 
scanning. You can use these suggested workflows to construct your code 
scanning workflows, instead of starting from scratch. Code scanning 
starter workflows are only available for your repository if code scanning 
is enabled.

Using actions to run code scanning will use minutes. (*Check bottom of 
page for minutes on free account)*

1. On GitHub.com, navigate to the main page of the repository.
2. Under your repository name, click  **Actions**.
3. If the repository has already at least one workflow set up and running, 
click **New workflow**
and go to step 5. If there are currently no workflows configured for the 
repository, go to the next step.
4. Scroll down to the "Security" category and click **Configure** under 
the workflow you want to configure, or click **View all** to see all 
available security workflows.
5. On the right pane of the workflow page, click **Documentation** and 
follow the on-screen instructions to tailor the workflow to your needs.

**Setting up code scanning manually**

You can set up code scanning in any public repository where you have 
written access.

Using actions to run code scanning will use minutes. (*Check bottom of 
page for minutes on free account)*

1. On GitHub.com, navigate to the main page of the repository.
2. Under your repository name, click  **Security**.
3. To the right of "Code scanning alerts", click **Set up code scanning.**
4. Under "Get started with code scanning", click **Set up this workflow** 
on the CodeQL analysis workflow or on a third-party workflow or 
**Configure CodeQL alerts**
5. To customize how code scanning scans your code, edit the workflow.
    1. Generally you can commit the CodeQL analysis workflow without 
making any changes to it. However, many of the third-party workflows 
require additional configuration, so read the comments in the workflow 
before committing.
6. Use the **Start commit** drop-down, and type a commit message.
7. Choose whether you'd like to commit directly to the default branch, or 
create a new branch and start a pull request.
8. Click **Commit new file** or **Propose new file**.
    1. In the default CodeQL analysis workflow, code scanning is 
configured to analyze your code each time you either push a change to the 
default branch or any protected branches, or raise a pull request against 
the default branch. As a result, code scanning will now commence.

## Configuring Code Scanning

---

GitHub saves workflow files in the *.github/workflows* directory of your 
repository. You can find a workflow you have added by searching for its 
file name.

1. In your repository, browse to the workflow file you want to edit.
2. In the upper right corner of the file view, to open the workflow 
editor, click .
3. After you have edited the file, click **Start commit** and complete the 
"Commit changes" form. You can choose to commit directly to the current 
branch, or create a new branch and start a pull request.

**Configuring frequency**

You can configure the CodeQL analysis workflow to scan code on a schedule 
or when specific events occur in a repository.

**Scanning on Push**

By default, the CodeQL analysis workflow uses the `on.push`event to 
trigger a code scan on every push to the default branch of the repository 
and any protected branches. For code scanning to be triggered on a 
specified branch, the workflow must exist in that branch.

**Scanning on Pull Requests**

The default CodeQL analysis workflow uses the `pull_request`event to 
trigger a code scan on pull requests targeted against the default branch.

**Defining the severities causing pull request check failure**

By default, only alerts with the severity level of `Error` or security 
severity level of `Critical`or `High` will cause a pull request check 
failure, and a check will still succeed with alerts of lower severities.

You can change the levels of alert severities and of security severities 
that will cause a pull request check failure in your repository settings.

1. On GitHub.com, navigate to the main page of the repository.
2. Under your repository name, click **Settings.**
3. In the "Security" section of the sidebar, click  **Code security and 
analysis**
4. Under "Code scanning", to the right of "Check Failure", use the 
drop-down menu to select the level of severity you would like to cause a 
pull request check failure.

**Scanning on a schedule**

If you use the default CodeQL analysis workflow, the workflow will scan 
the code in your repository once a week, in addition to the scans 
triggered by events. To adjust this schedule, edit the `cron`value in the 
workflow.

---

***CodeQL code scanning automatically detects code written in the 
supported languages.***

- C/C++
- C#
- Go
- Java
- Javascript/Typescript
- Python
- Ruby (*currently in Beta)*

---

## Troubleshoot CodeQL workflow

---

[https://docs.github.com/en/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow](https://docs.github.com/en/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow)

**Viewing the logging output from codescanning**

After setting up code scanning for your repository, you can watch the 
output of the actions as they run.

1. Under your repository name, click  **Actions**.
2. Click the entry for the code scanning workflow.
3. Click the job name on the left. For example, **Analyze (LANGUAGE)**
4. Review the logging output from the actions in this workflow as they 
run.
5. Once all jobs are complete, you can view the details of any code 
scanning alerts that were identified.

**Understanding the pull check requests**

Each code scanning workflow you set to run on pull requests always has at 
least two entries listed in the checks section of a pull request. There is 
one entry for each of the analysis jobs in the workflow, and a final one 
for the results of the analysis.

The names of the code scanning analysis checks take the form: "TOOL NAME / 
JOB NAME (TRIGGER)." For example, for CodeQL, analysis of C++ code has the 
entry "CodeQL / Analyze (cpp) (pull_request)." You can click **Details** 
on a code scanning analysis entry to see logging data. This allows you to 
debug a problem if the analysis job failed.

When the code scanning jobs complete, GitHub works out whether any alerts 
were added by the pull request and adds the "Code scanning results / TOOL 
NAME" entry to the list of checks. After code scanning has been performed 
at least once, you can click **Details**
to view the results of the analysis. If you used a pull request to add 
code scanning to the repository, you will initially see an "Analysis not 
found" message when you click **Details**
on the "Code scanning results / TOOL NAME" check.

The table lists one or more categories. Each category relates to specific 
analyses, for the same tool and commit, performed on a different language 
or a different part of the code. For each category, the table shows the 
two analyses that code scanning attempted to compare to determine which 
alerts were introduced or fixed in the pull request.

**Reasons for the “Analysis not found” message**

After code scanning has analyzed the code in a pull request, it needs to 
compare the analysis of the topic branch (the branch you used to create 
the pull request) with the analysis of the base branch (the branch into 
which you want to merge the pull request). This allows code scanning to 
compute which alerts are newly introduced by the pull request, which 
alerts were already present in the base branch, and whether any existing 
alerts are fixed by the changes in the pull request. Initially, if you use 
a pull request to add code scanning to a repository, the base branch has 
not yet been analyzed, so it's not possible to compute these details. In 
this case, when you click through from the results check on the pull 
request you will see the "Analysis not found" message.

There are other situations where there may be no analysis for the latest 
commit to the base branch for a pull request. These include:

- The pull request has been raised against a branch other than the default 
branch, and this branch hasn't been analyzed.

    To check whether a branch has been scanned, go to the Code scanning 
page, click the **Branch** drop-down and select the relevant branch.


## About code scanning alerts

---

You can set up code scanning to check the code in a repository using the 
default CodeQL analysis.

When the analysis is complete, the resulting alerts are displayed 
alongside each other in the security view of the repository.

By default, code scanning analyzes your code periodically on the default 
branch and during pull requests.

**About alert details**

Each alert highlights a problem with the code and the name of the tool 
that identified it. You can see the line of code that triggered the alert, 
as well as properties of the alert, such as the alert severity, security 
severity, and the nature of the problem. Alerts also tell you when the 
issue was first introduced. For alerts identified by CodeQL analysis, you 
will also see information on how to fix the problem.

The status and details on the alert page only reflect the state of the 
alert on the default branch of the repository, even if the alert exists in 
other branches. You can see the status of the alert on non-default 
branches in the **Affected branches**
 section on the right-hand side of the alert page. If an alert doesn't 
exist in the default branch, the status of the alert will display as "in 
pull request" or "in branch" and will be colored grey.

If you set up code scanning using CodeQL, you can also find data-flow 
problems in your code. Data-flow analysis finds potential security issues 
in code

When code scanning reports data-flow alerts, GitHub shows you how data 
moves through the code. Code scanning allows you to identify the areas of 
your code that leak sensitive information, and that could be the entry 
point for attacks by malicious users.

**About severity levels**

Error, Warning, or Note *Located in the “Defining the severities causing 
pull request check failure” part of the about code scanning.*

If code scanning is enabled as a pull request check, the check will fail 
if it detects any results with a severity of `error`
. You can specify which severity level of code scanning alerts causes a 
check failure.

**About security severity levels**

Code scanning displays security severity levels for alerts that are 
generated by security queries. Security severity levels can be `Critical`, 
`High`, `Medium`, or `Low`.

To calculate the security severity of an alert, we use Common 
Vulnerability Scoring System (CVSS) data.

By default, any code scanning results with a security severity of 
`Critical`or `High`will cause a check failure. You can specify which 
security severity level for code scanning results should cause a check 
failure.

**About labels for alerts that are not found in application code**

GitHub assigns a category label to alerts that are not found in 
application code. The label relates to the location of the alert.

- **Generated**: Code generated by the build process
- **Test**: Test code
- **Library**: Library or third-party code
- **Documentation**: Documentation

Code scanning categorizes files by file path. You cannot manually 
categorize source files.

***There may be some alerts that may be marked as experimental, that’s due 
to the alerts being found using a machine learning model to extend the 
capabilities of an existing CodeQL query.***

***The default CodeQL query suites do not include any queries that use 
machine learning to generate experimental alerts. To run machine learning 
queries during code scanning you need to run additional queries contained 
in one of the following query suites:***

security-extended

security-and-quality

## Triaging code scanning alerts in pull requests

When code scanning identifies a problem in a pull request, you can review 
the highlighted code and resolve the alert.

---

*If you have read permission for a repository, you can see annotations on 
pull requests. With write permission, you can see detailed information and 
resolve code scanning alerts for that repository.*

---

**About code scanning results on pull requests**

In repositories where code scanning is configured as a pull request check, 
code scanning checks the code in the pull request. By default, this is 
limited to pull requests that target the default branch, but you can 
change this configuration within GitHub Actions. If merging the changes 
would introduce new code scanning alerts to the target branch, the alerts 
are reported in multiple places.

- Check results in the pull request
- The **Conversation** tab of the pull request, as part of a pull request 
review
- The **Files changed** tab of the pull request

If you have write permission for the repository, you can see any existing 
code scanning alerts on the **Security** tab.

In repositories where code scanning is configured to scan each time code 
is pushed, code scanning will also map the results to any open pull 
requests and add the alerts as annotations in the same places as other 
pull request checks.

If your pull request targets a protected branch that uses code scanning, 
and the repository owner has configured required status checks, then the 
"Code scanning results" check must pass before you can merge the pull 
request.

**About code scanning as a pull request check**

There are many options for configuring code scanning as a pull request 
check, so the exact setup of each repository will vary and some will have 
more than one check.

**Code scanning results check**

For all configurations of code scanning, the check that contains the 
results of code scanning is: **Code scanning results**. The results for 
each analysis tool used are shown separately. Any new alerts caused by 
changes in the pull request are shown as annotations.

To see the full set of alerts for the analyzed branch, click **View all 
branch alerts**. This opens the full alert view where you can filter all 
the alerts on the branch by type, severity, tag, etc.

**Code scanning results check failure**

If the code scanning results check finds any problems with a severity of 
`error`, `critical`, or `high`, the check fails and the error is reported 
in the check results. If all the results found by code scanning have lower 
severities, the alerts are treated as warnings or notes and the check 
succeeds.

You can override the default behavior in your repository settings, by 
specifying the level of severities and security severities that will cause 
a pull request check failure.

**Other code scanning checks**

Depending on your configuration, you may see additional checks running on 
pull requests with code scanning configured. These are usually workflows 
that analyze the code or that upload code scanning results. These checks 
are useful for troubleshooting when there are problems with the analysis.

**Viewing an alert on your pull request**

You can see any code scanning alerts introduced in a pull request by 
viewing the **Conversation** tab. Code scanning posts a pull request 
review that shows each alert as an annotation on the lines of code that 
triggered the alert. You can comment on the alerts, dismiss the alerts, 
and view paths for the alerts, directly from the annotations. You can view 
the full details of an alert by clicking the "Show more details" link, 
which will take you to the alert details page.

You can also view all code scanning alerts in the **Files changed** tab of 
the pull request. Existing code scanning alerts on a file that are outside 
the diff of the changes introduced in the pull request will only appear in 
the **Files changed** tab.

If you have write permission for the repository, some annotations contain 
links with extra context for the alert.

To see more information about an alert, users with write permission can 
click the **Show more details** link shown in the annotation. This allows 
you to see all of the context and metadata provided by the tool in an 
alert view. The view also shows which commit introduced the problem.

The status and details on the alert page only reflect the state of the 
alert on the default branch of the repository, even if the alert exists in 
other branches. You can see the status of the alert on non-default 
branches in the **Affected branches** section on the right-hand side of 
the alert page. If an alert doesn't exist in the default branch, the 
status of the alert will display as "in pull request" or "in branch" and 
will be colored grey.

In the detailed view for an alert, some code scanning tools, like CodeQL 
analysis, also include a description of the problem and a **Show more** 
link for guidance on how to fix your code.

**Commenting on an alert in a pull request**

You can comment on any code scanning alert introduced by the changes in a 
pull request. Alerts appear as annotations in the **Conversation** tab of 
a pull request, as part of a pull request review, and also are shown in 
the **Files changed** tab. You can only comment on alerts introduced by 
the changes in a pull request. Existing code scanning alerts, on files 
that are outside the changes introduced in the pull request, will appear 
in the **Files changed** tab but cannot be commented on.

**Fixing an alert on your pull request**

Anyone with push access to a pull request can fix a code scanning alert 
that's identified on that pull request. If you commit changes to the pull 
request this triggers a new run of the pull request checks. If your 
changes fix the problem, the alert is closed and the annotation removed.

**Dismissing an alert on your pull request**

An alternative way of closing an alert is to dismiss it. You can dismiss 
an alert if you don't think it needs to be fixed. For example, an error in 
code that's used only for testing, or when the effort of fixing the error 
is greater than the potential benefit of improving the code. If you have 
write permission for the repository, the **Dismiss** button is available 
in code annotations and in the alerts summary. When you click **Dismiss** 
you will be prompted to choose a reason for closing the alert.

It's important to choose the appropriate reason from the drop-down menu as 
this may affect whether a query continues to be included in future 
analysis. Optionally, you can comment on a dismissal to record the context 
of an alert dismissal. The dismissal comment is added to the alert 
timeline and can be used as justification during auditing and reporting. 
You can retrieve or set a comment by using the code scanning REST API. The 
comment is contained in `dismissed_comment`
for the `alerts/{alert_number}`
 endpoint.

If you dismiss a CodeQL alert as a false positive result, for example 
because the code uses a sanitization library that isn't supported, 
consider contributing to the CodeQL repository and improving the analysis.

## Managing code scanning alerts from your repository

---

Anyone with read permission for a repository can see code scanning 
annotations on pull requests. You need write permission to view a summary 
of all the alerts for a repository on the **Security** tab.

By default, the code scanning alerts page is filtered to show alerts for 
the default branch of the repository only.

1. On GitHub.com, navigate to the main page of the repository.
2. Under your repository name, click  **Security**.
3. In the left sidebar, click **Code scanning alerts**.
4. Optionally, use the free text search box or the drop-down menus to 
filter alerts. For example, you can filter by the tool that was used to 
identify alerts.
5. Under "Code scanning," click the alert you'd like to explore.
6. Optionally, if the alert highlights a problem with data flow, click 
**Show paths**
 to display the path from the data source to the sink where it's used.
7. Alerts from CodeQL analysis include a description of the problem. Click 
**Show more**
for guidance on how to fix your code.

**Filtering code scanning alerts**

You can filter the alerts shown in the code scanning alerts view. This is 
useful if there are many alerts as you can focus on a particular type of 
alert. There are some predefined filters and a range of keywords that you 
can use to refine the list of alerts displayed.

- To use a predefined filter, click **Filters**, or a filter shown in the 
header of the list of alerts, and choose a filter from the drop-down list.
- To use a keyword, either type directly in the filters text box, or:
    1. Click in the filters text box to show a list of all available 
filter keywords.
    2. Click the keyword you want to use and then choose a value from the 
drop-down list.

