# Project Overview

LifeLink is a community-driven emergency blood assistance platform designed to connect people who need blood with eligible nearby donors quickly and efficiently.

## What is LifeLink?

LifeLink is a web application designed to help people find and request blood quickly during medical emergencies. It also allows users to donate blood, search for nearby donors, and connect with people in need. Every registered user can both donate blood and request blood whenever required, making the platform more flexible and community-driven.

## Why are we building it?

We are building LifeLink to solve the problem people face during medical emergencies when they cannot find the right blood donor in time. Many emergencies require immediate blood, but finding a suitable donor is often slow and difficult. LifeLink aims to connect people quickly and efficiently, helping save lives when every minute matters.

## Who will use it?

LifeLink is designed for everyone because medical emergencies can happen to anyone at any time. Any registered user can donate blood, request blood, or help others. Hospitals will use the platform to verify blood requests and assist users during emergencies, while administrators will manage users, hospitals, reports, and the overall platform.


# Problem Statement

People often face difficulties during medical emergencies when they cannot find a suitable blood donor in time. Many emergencies require blood immediately, but finding a compatible and available donor can be a slow and difficult process.

LifeLink aims to reduce this delay by connecting people who need blood with suitable donors quickly and efficiently. The goal is to make finding blood during an emergency faster, easier, and more reliable when every minute matters.

## Current Problems

- Difficulty finding the required blood group.
- Difficulty finding donors who are currently available.
- Limited time to search for donors during medical emergencies.
- Difficulty finding donors for rare blood groups.
- Available donors may be located too far away from the patient or hospital.
- Existing donor information may be outdated or incorrect.
- People may not know whether a donor is currently eligible to donate blood.
- There is no simple way to know when a previous donor will become eligible to donate again.

## Limitations of Existing Solutions

People currently search for blood donors using WhatsApp groups, Instagram stories, social media posts, phone calls, friends, relatives, hospitals, and blood banks.

These methods can be ineffective during emergencies because WhatsApp groups, Instagram stories, and personal contacts reach only a limited number of people.

Information can also become outdated quickly. A person who previously volunteered to donate may no longer be available or eligible. Social media posts also do not automatically identify compatible donors based on blood group, availability, and location.

As a result, valuable time may be lost contacting multiple people individually.

## Proposed Solution

LifeLink is a web application designed to help people find and request blood quickly during medical emergencies.

Every registered user can both donate blood and request blood whenever required. Users are not permanently classified as either a donor or a patient.

LifeLink will provide features such as:

- Nearby donor discovery
- Blood-group matching
- Emergency blood requests
- Real-time notifications
- Hospital verification
- Donor availability tracking
- Donation history
- Donation eligibility and cooldown tracking

After a successful donation, the system will record the user's last donation date and temporarily prevent another donation until the configured eligibility period has passed.

## Unique Value of LifeLink

LifeLink aims to provide a faster and easier way to connect people who urgently need blood with suitable donors near their location.

Instead of depending only on social media posts or personal contacts, LifeLink will help identify potential donors using factors such as blood-group compatibility, location, availability, and donation eligibility.

This can be especially useful when searching for rare blood groups, where finding an appropriate donor through traditional methods may be difficult.


# Target Users and Permissions

| Role     | Purpose                           |
| -------- | --------------------------------- |
| User     | Regular person using LifeLink     |
| Hospital | Verified hospital account         |
| Admin    | Manages and protects the platform |

## 1. User

A normal user can:

- Register and login
- Manage their profile
- Add their blood group
- Set donation availability
- Request blood
- Donate blood if eligible
- Search for compatible donors
- Receive emergency notifications
- View donation history
- View blood request history

## 2. Hospital

A verified hospital can:

- Register and create a hospital account.
- Manage and update hospital information such as name, address, contact details, and location.
- Create emergency blood requests on behalf of patients who are unable to create requests themselves.
- Specify the required blood group, number of units, urgency level, and other necessary request details.
- View active blood requests associated with the hospital.
- Verify blood requests created by users when the patient is admitted to that hospital.
- Search for compatible and available blood donors near the hospital.
- Contact or coordinate with users who accept an emergency blood request.
- Update the status of a blood request, such as Active, In Progress, Fulfilled, or Cancelled.
- Maintain and update information about available blood groups and blood units at the hospital, if the hospital provides blood-bank services.
- View the history of blood requests handled through the hospital.
- Report suspicious users, fake donation responses, or fraudulent blood requests to the platform administrator.
- Receive notifications when a donor accepts a blood request associated with the hospital.
- Confirm that a blood donation related to a LifeLink request has been successfully completed.


## 3. Admin

An administrator can:

- Securely log in to the Admin Dashboard.
- View and manage registered users on the platform.
- View, approve, or reject hospital registration requests.
- Verify hospital accounts before providing hospital-level permissions.
- Suspend or block users who misuse the platform.
- Suspend or remove fraudulent hospital accounts.
- View active, completed, cancelled, and expired blood requests.
- Remove or flag fake and suspicious blood requests.
- Review reports submitted by users and hospitals.
- Take action against accounts involved in spam, fraud, or misuse.
- View donation records and blood request history when required for platform management.
- Manage platform-wide settings such as the configured donation eligibility/cooldown period.
- View platform statistics such as total users, verified hospitals, active requests, completed donations, and emergency requests.
- Manage blood-group and other system configuration data when required.
- Monitor important platform activities for security and moderation purposes.


# User Stories

User stories describe what different users want to accomplish using LifeLink and why those features are useful.

## General User Stories

1. As a user, I want to create an account so that I can access LifeLink's blood donation and emergency assistance services.

2. As a user, I want to securely log in to my account so that I can access my personal information and LifeLink features.

3. As a user, I want to add my blood group and basic information to my profile so that the system can determine which blood requests may be relevant to me.

4. As a user, I want to update my donation availability so that I receive relevant donation requests only when I am available to donate.

5. As a user, I want to create an emergency blood request so that I can quickly find compatible donors when blood is urgently required.

6. As a user, I want to search for compatible donors based on blood group and location so that I can find suitable donors nearby.

7. As a user, I want to receive notifications about nearby emergency blood requests matching my blood group so that I can respond quickly if I am eligible to donate.

8. As a user, I want to accept a blood donation request so that the requester and hospital know that I am willing to help.

9. As a user, I want to view the status of my blood request so that I know whether donors have responded and whether the request is still active.

10. As a user, I want to view my donation history so that I can keep track of my previous donations.

11. As a user, I want to view my blood request history so that I can see my previous and current requests.

12. As a user, I want LifeLink to show my next eligible donation date after a successful donation so that I know when I can donate again.

13. As a user, I want the system to prevent me from accepting donation requests while I am temporarily ineligible so that donation eligibility rules are followed.

14. As a user, I want to communicate with a matched donor or requester so that we can coordinate the blood donation.

15. As a user, I want to report suspicious accounts or fake blood requests so that LifeLink remains trustworthy.

## Hospital User Stories

16. As a hospital, I want to create an emergency blood request on behalf of a patient so that blood can be located even when the patient cannot use LifeLink.

17. As a verified hospital, I want to verify blood requests associated with my hospital so that users can distinguish genuine requests from suspicious ones.

18. As a hospital, I want to search for compatible and available donors near the hospital so that emergency blood requirements can be handled faster.

19. As a hospital, I want to update the status of a blood request so that users know whether it is active, fulfilled, cancelled, or expired.

20. As a hospital, I want to confirm that a donation has actually been completed so that the donor's donation history and eligibility date can be updated correctly.

21. As a hospital, I want to maintain blood availability information when blood-bank services are available so that users can see relevant availability information.

22. As a hospital, I want to receive notifications when a user accepts one of our emergency blood requests so that hospital staff can coordinate with the donor.

23. As a hospital, I want to report fraudulent users or suspicious activity so that administrators can investigate misuse of the platform.

## Admin User Stories

24. As an admin, I want to review hospital registration requests so that only legitimate hospitals receive verified hospital permissions.

25. As an admin, I want to manage users and suspend accounts involved in fraud, spam, or misuse so that the platform remains safe.

26. As an admin, I want to review reported blood requests and accounts so that suspicious activity can be investigated.

27. As an admin, I want to remove or disable fraudulent blood requests so that users are not misled during emergencies.

28. As an admin, I want to view platform statistics so that I can understand the number of users, hospitals, requests, and completed donations.

29. As an admin, I want to manage configurable platform rules, including donation eligibility periods, so that the system can adapt when requirements change.

30. As an admin, I want important administrative actions to be recorded in audit logs so that sensitive changes can be tracked.

# Feature Prioritization

## MVP(Minimum Viable Product) - Phase 1

- User registration
- User login/logout
- User profile
- Blood group information
- User location/city
- Donation availability status
- Create blood request
- View active blood requests
- Search/filter requests by blood group and location
- Accept/respond to a blood request
- Donation eligibility checking
- Last donation date
- Next eligible donation date
- Donation history
- Request history
- Basic hospital accounts
- Hospital verification
- Hospital confirmation of completed donations