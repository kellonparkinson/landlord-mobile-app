# Landlord App

Communicating with tenants can sometimes be a challenge, especially when you need to keep track of who has said what, who has made certain requests, and making sure everyone gets timely reminders/updates

# Description:
A messaging application specifically for landlords/property managers that offers a few key features:

- A new phone number (similar to Google voice) so that tenants only have your landlord# and not your personal#

- The ability to schedule text messages ahead of time so you don’t have to remember to send a text the day of
    * Repairman coming to the property next week, schedule the text today to be sent the morning of
    * Rent reminder
    * After signing a 6 month lease, immediately schedule a text for 5 months later to ask if they are renewing lease or not

- A message template creator for easy responses to common questions (great for sticking to policies)

- Messages that were sent from the scheduler are highlighted in conversation so you have a visual indicator that the scheduler is functioning
    * Manually sent messages are not highlighted, look like a normal texting conversation

- Dark mode because that’s cool

- Possibly integrate with application software (for potential tenants), contract software (for ease of signing), payment software (pay directly through a link), and other possible integrations with existing rental softwares

# Tech Stack:
Mobile Application (for most users, private landlords)
- React Native
- Most likely Postgres for database
    * Research best database method for messaging app

Desktop Dashboard (for larger landlords, property managers)
- Next.js or React

# Mobile App Structure:
The app should open up directly to the messages, not to a Home Screen or dashboard screen. 

- Messages Screen
    * Shows preview of all conversations
    * Most recent at top
    * Pinned conversations?

- Conversation Screen
    * Messages sent from scheduler are highlighted for visual indication
    * Button for accessing Message Templates
    * Button for going straight to Scheduler

- Contacts Screen
    * Be able to group tenants based on property
    * Section in contact for what each tenant pays for rent

- Home/Dashboard Screen
    * Access scheduler, templates, settings
    * Analytics

- Login/Signup Screens
    * Leverage signup process to gather data
    * Signup process needs to give user a new phone number
    * Ask if they’re a private landlord or property manager
    * Ask how many tenants/doors they have

- Scheduler Screen
    * Schedule one-time messages
        * Be able to add one or more people to the same scheduled message (adding more than 1 doesn’t send a group message unless indicated)
    * Schedule recurring messages (rent, holidays, etc)
    * For multiple properties, be able to select tenants based on property

- Message Template Screen
    * Create reusable message templates, and name each template
        * E.g.
            * “Applicant Requirements” could give you a ready-to-send message with all of your requirements when messaging potential tenants
            * “Late Rent Policy” for when a tenant asks if they can pay their rent late

- Settings Screen
    * Manage/update list of all properties

# Desktop Dashboard Structure:
Dashboard is a more pragmatic option for larger landlords or property managers with many tenants.
Desktop is ideal for seeing longer lists of data (contacts, scheduled messages, property info, etc)

- Home/Dashboard Screen

- Messages Screen
    * No separate conversation screen
    * All previews can be on side of screen with selected conversation taking up rest of screen

- Scheduler Screen
    * Probably put Message Templates on this same screen

- Login/Signup Screens
    * Same as mobile
    * Signup can happen in either place
    * Link to download mobile app

- Contacts Screen

*If a Property Manager account*
- Properties Screen for seeing and managing/updating all properties
    * This screen option is grayed out and disabled for non-PM accounts