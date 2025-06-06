export const searchData = [
  {
    'path': '/',
    'title': 'Welcome to Justnote documentation',
    'sections': [
      [
        '',
        '',
        [
          "Our documentation is designed to empower you, helping you understand Justnote's features, navigate its interface, and troubleshoot any issues you may encounter. Whether you're getting started, aiming for mastery, or facing challenges, our documentation will help you achieve what you want.",
        ],
      ],
      [
        'Justnote: The TL;DR',
        'justnote-the-tl-dr',
        [
          'Justnote is your privacy-focused note-taking app. Justnote helps you take notes easily anytime on any device. Powered by Stacks technology, all your saved notes are encrypted, and only you can decrypt them and see the content inside.',
          'Justnote is a simple note-taking app, yet powerful enough. Our WYSIWYG-rich text editor has features like bold, underline, font color, and background color. You can take notes easily and quickly. Justnote is your quick note-taking app for your to-do lists, reminders, shopping lists, memos, thoughts, etc. Justnote is ubiquitous. You can use Justnote on any of your devices. All your notes are synced across your devices automatically.',
          'Powered by Web3 technology from Stacks:',
          'Your account is cryptographically generated; only you, with your Secret Key, can control it. Your account cannot be locked, banned, or deleted by anyone, as your Secret Key is required to access and modify your account.',
          'Everything is encrypted; only you, with your Secret Key, can see the content inside. No one can see the content inside your data, so it cannot be used to create targeted ads. If your data is stolen, no information is leaked.',
          'Your data lives in a data server of your choice; only you, with your Secret Key, can change it. You can manage your data and set permissions directly, as you can host your own data server or choose any data server provider.',
          "Bring back control of your account and data one note at a time with Justnote, powered by Web3 technology from Stacks, to ensure your privacy cannot be compromised. Not only that, Justnote doesn't be evil; Justnote can't be.",
          'Justnote offers one simple no-tricks subscription plan to support us and unlock all extra features:',
          'Tags',
          'Lock lists & notes',
          'More font sizes',
          'Dark appearance',
          'Custom date format',
          'Section by month',
          'Pin to the top',
          "It's our intention to never show advertisements, and we don't rent, sell, or share your information with other companies. Our optional paid subscription is the only way we make money.",
        ],
      ],
      [
        'How to Use These Docs',
        'how-to-use-these-docs',
        [
          'You can start by reading through the topics in the left-hand navigation or jump directly to specific areas that interest you. If you want something specific, use the search function (Cmd/Ctrl + K) to find articles with particular keywords.',
        ],
      ],
      [
        'What Next?',
        'what-next',
        [
          "Justnote's Features",
          "Looking to learn more about Justnote's features? The \"Features\" section in the left navigation is where you want to go. This section explains everything Justnote offers, from core functionalities to extra features. Whether a new user or a pro, the Features section will help you know everything to utilize and unlock Justnote's full potential.",
          'Basic Concepts',
          'Are you new to note-taking apps or word processors? The "Justnote 101" section is a great place to start. This introductory section explains what a note-taking app is and how it differs from a word processor.',
          'Misc.',
          "This \"Misc.\" section contains FAQs or Frequently Asked Questions. If you have questions about Justnote, this is an excellent place to start. Our FAQs section covers various topics, from general usage to feature functionality. If you can't find the answer you want here, don't hesitate to contact us.",
        ],
      ],
    ],
  },
  {
    'path': '/account',
    'title': 'Account',
    'sections': [
      [
        '',
        '',
        [
          'Your account is cryptographically generated; only you, with your Secret Key, can control it.',
          "When you use Justnote, your account is cryptographically generated. You'll receive a Secret Key — a unique set of 24 words that acts like a password — used to derive your account with cryptographic algorithms. Only you know your Secret Key and only your Secret Key can be used to create your account and make changes to it. Your account cannot be locked, banned, or deleted by anyone, as your Secret Key is required to access and modify your account.",
        ],
      ],
      [
        'Stacks Account',
        'stacks-account',
        [
          'Your account is a Stacks account, and a Stacks account is used to access the Stacks blockchain and a Stacks data server. The Stacks blockchain stores your account information, such as your username, profile, and data server location. A Stacks data server stores your encrypted app data, such as all your saved notes.',
          "Your Secret Key acts like a password. It's only known to you, ensuring that only you can decrypt your data and see the content inside. If you lose it, there is no way to retrieve it back. You need to keep it safe.",
          "Your Secret Key cannot be changed or reset. As it's used to encrypt your content file by file, if you change your Secret Key, every file needs to be decrypted with your old Secret Key and encrypted again with your new Secret Key.",
        ],
      ],
      [
        'Delete Account',
        'delete-account',
        [
          "No one without your Secret Key can access your account or content, so you don't need to delete them. To delete all your data, please go to Settings -> Data -> Delete All Data.",
          'Your Stacks account is generated by a cryptographic algorithm and your Secret Key. Forgetting your Secret Key is the only way to delete your account.',
          "If you've started with us, we create your Stacks account without a username, profile, or data server location. So, no data is stored in the Stacks blockchain, and your data is stored in our provided server by default.",
          "After you delete all your data in Settings -> Data -> Delete All Data, there's nothing left. You can forget your Secret Key. It's permanently deleting your account.",
        ],
      ],
    ],
  },
  {
    'path': '/encryption',
    'title': 'Encryption',
    'sections': [
      [
        '',
        '',
        [
          'Everything is encrypted; only you, with your Secret Key, can see the content inside.',
          'In our apps, all your content is encrypted with your Secret Key. Only your encrypted content leaves your device to be stored on servers. At the same time, your Secret Key always stays in your device, ensuring that only you know your Secret Key. No one can see the content inside your encrypted content because only your Secret Key can decrypt it. Your encrypted data must be downloaded to your device to decrypt and access the content inside, hence end-to-end encryption. You can be assured that your encrypted content cannot be used to create targeted ads. Even if your encrypted content is stolen, no information is leaked.',
        ],
      ],
      [
        'Encryption Process',
        'encryption-process',
        [
          'Encryption involves a multi-step process that begins with generating a random number with a cryptographically secure random number generator. This random number selects 24 unique words from a predefined wordlist, forming a Secret Key. Then, a key derivation function named PBKDF2 is applied to the Secret Key, transforming it into a ~100-character string known as a private key. With the private key, an industry-standard encryption algorithm named AES-256-CBC is used to securely encrypt data.',
          'Also, the private key is the foundation for generating a public key and signing messages.',
        ],
      ],
      [
        'Encryption Algorithms',
        'encryption-algorithms',
        [
          'Cryptographically Secure Random Number Generator',
          'A Cryptographically Secure Random Number Generator (CSPRNG) is a specialized random number generator designed to produce sequences of numbers statistically indistinguishable from truly random numbers. CSPRNGs are specifically engineered to avoid such predictability, unlike ordinary random number generators, which may exhibit patterns or biases.',
          'The output of a CSPRNG should be impossible to predict based on past outputs or any other available information. This is crucial for cryptographic applications, as any predictability could be exploited by attackers to compromise the security of a system. Additionally, the sequence of numbers produced by a CSPRNG should exhibit statistical properties consistent with a truly random sequence, such as uniform distribution, no correlations, and passing various statistical tests. This ensures that the CSPRNG is not generating biased or predictable sequences of numbers. Finally, a CSPRNG should resist various attacks that could compromise its security, such as cryptanalysis or side-channel attacks.',
          'A CSPRNG is a crucial component of modern cryptography. It provides a reliable source of random numbers essential for ensuring cryptographic system security.',
          'PBKDF2',
          'PBKDF2 (Password-Based Key Derivation Function 2) is a cryptographic algorithm that transforms a relatively short password or passphrase into a longer, more complex cryptographic key. This derived key can be used for various cryptographic operations, such as encryption, decryption, or digital signing.',
          'PBKDF2 combines the password with a random salt value and then iteratively applies a pseudorandom function (PRF) to the resulting input. The number of iterations can be adjusted to control the computational cost of deriving the key, making it more resistant to brute-force attacks. The final output of PBKDF2 is a derived key of a desired length, typically 128, 192, or 256 bits.',
          "PBKDF2 is widely used due to its simplicity, security, and flexibility. It is relatively easy to implement and understand, making it a popular choice for various cryptographic applications. PBKDF2's iterative nature makes it resistant to brute-force attacks, even with powerful hardware. Additionally, PBKDF2 can be used with multiple PRFs and iteration counts, allowing customization to different security requirements.",
          'PBKDF2 is commonly used for password hashing, key derivation, and authentication. It hashes passwords before storing them in databases, making it more difficult for attackers to recover the original passwords. PBKDF2 can also derive cryptographic keys from user-provided passwords or passphrases for various cryptographic operations. Furthermore, PBKDF2 can be used in authentication protocols to verify the authenticity of users based on their passwords.',
          'AES-256-CBC',
          'AES-256-CBC (Advanced Encryption Standard with Cipher Block Chaining) is a robust and widely recognized encryption algorithm. It provides high security for data protection by encrypting data by breaking it into 16-byte blocks and applying complex mathematical operations to each block.',
          'The "256" in AES-256 refers to the key size, which is 256 bits long. A more extended key size makes it exponentially harder for an unauthorized party to crack the encryption, providing higher security.',
          'The "CBC" in AES-256-CBC stands for Cipher Block Chaining. This mode of operation links each encrypted block to the previous one, making it more difficult for attackers to identify patterns or weaknesses in the encryption. If one block is altered, it affects the decryption of subsequent blocks, making it less likely for an attacker to successfully tamper with the data.',
          'Using AES-256-CBC, your data is effectively scrambled and protected from unauthorized access. This encryption method is widely trusted and used in various applications, including secure messaging, online banking, and data storage.',
        ],
      ],
    ],
  },
  {
    'path': '/data-server',
    'title': 'Data Server',
    'sections': [
      [
        '',
        '',
        [
          'Your data lives in a data server of your choice; only you, with your Secret Key, can change it.',
          'You can choose where to store your data by using your Secret Key to record the location of your data server in the Stacks blockchain. Our apps will retrieve the information when you sign in and store your data on that specified server. You truly own your data as you can access, manage, and set permissions directly on your server. Only your Secret Key can change your information in the blockchain. No one can lock you out of your own data.',
        ],
      ],
      [
        'Stacks Data Server',
        'stacks-data-server',
        [
          "Justnote stores your data in a Stacks data server. You can specify which Stacks data server to store your data in. By default, your Stacks data server is at hub.stacksdrive.com, provided by STX Apps. You can also deploy your own Stacks data server. To change your Stacks data server, you must record your server's information on the Stacks blockchain using your Secret Key. Justnote retrieves the information from the blockchain when you sign in and store your data on that specified server. For more details, please visit Stacks Gaia.",
          'There has yet to be a user-friendly tool for deploying your own Stacks data server, managing its location on the Stacks blockchain, or directly handling files and setting permissions on the server. We plan to create a tool with these features and will update you on our progress.',
        ],
      ],
    ],
  },
  {
    'path': '/take-a-note',
    'title': 'Take a Note',
    'sections': [
      [
        '',
        '',
        [
          'You can easily jot down notes on our website or app, and you can also share text from other apps right into ours.',
        ],
      ],
      [
        'At Justnote',
        'at-justnote',
        [
          "Click the '+' button on our website or app.",
        ],
      ],
      [
        'Share to our App',
        'share-to-our-app',
        [
          'Install our app from the Google Play or App Store on your device and share any text with it.',
        ],
      ],
    ],
  },
  {
    'path': '/organize-notes',
    'title': 'Organize Notes',
    'sections': [
      [
        '',
        '',
        [
          'Organize your notes by moving them to Archive, Trash, or any list (folder) you create. In Settings -> Lists, you can create and organize lists (folders), such as arranging or moving into another list as needed.',
        ],
      ],
      [
        'Move Notes',
        'move-notes',
        [
          'There are two ways to move notes:',
          "You can move a note by clicking the note three-dot menu and choosing 'Archive', 'Remove', or 'Move to'.",
          "To move multiple notes simultaneously, click the 'Select notes' button in the top bar first. Select as many notes as you want. Then, choose 'Archive', 'Remove', or 'Move to' in the top bar or right panel.",
        ],
      ],
      [
        'Create a New List',
        'create-a-new-list',
        [
          'Please go to Settings -> Lists to create a new list. Type a name in the text box and choose the OK (check) button. Your new list will be appended to the bottom of the others.',
        ],
      ],
      [
        'Organize Lists',
        'organize-lists',
        [
          'Also, in Settings -> Lists, you can:',
          'Edit a list name by clicking on the name.',
          "Arrange a list name with the 'up' or 'down' button.",
          "Move into another list with the 'Move to' button (creating nest lists or subfolders).",
          "Delete a list name with the 'Delete' button.",
          "Some buttons might be in the three-dot menu. Default lists — 'My Notes', 'Trash', and 'Archive' — can not be deleted. 'My Notes' is the default list when you share text with the mobile app. Trash is for removed notes only, and you can permanently delete them here.",
        ],
      ],
      [
        'Pin Notes',
        'pin-notes',
        [
          'You can choose notes to always stay on the top of the list, a.k.a. Pin to the top. There are two ways to do it:',
          "On any note, please choose a three-dot button -> 'Pin to the top'.",
          "To pin multiple notes to the top simultaneously, click the 'Select notes' button in the top bar first. Select as many notes as you want. Then, choose 'More actions' -> 'Pin to the top' in the top bar or right panel.",
          "To unpin notes from the top, please take similar steps but choose 'Manage pin' -> 'Unpin' instead. You can also move a pinned note up or down under the 'Manage pin'.",
        ],
      ],
      [
        'Tag Notes',
        'tag-notes',
        [
          'Each note can have multiple tags. Assigning a tag to a note enables you to list notes with the same tag, providing an additional method to browse notes, similar to lists and sublists.',
          'There are two ways to add or manage tags:',
          "On any note, please choose a three-dot button -> 'Add tags' or 'Manage tags'.",
          "To add or manage tags on multiple notes simultaneously, click the 'Select notes' button in the top bar first. Select as many notes as you want. Then, choose 'More actions' -> 'Manage tags' in the top bar or right panel.",
        ],
      ],
      [
        'Delete Notes',
        'delete-notes',
        [
          'Removed notes in Trash will be automatically permanently deleted after 45 days. You can permanently delete any note in Trash immediately by:',
          "Click the 'Permanently delete' button under the note three-dot menu.",
          "To permanently delete multiple removed notes, click the 'Select notes' button in the top bar first. Select as many removed notes as you want. Then, choose the 'Permanently delete' button in the top bar or right panel.",
        ],
      ],
      [
        'Delete All Data',
        'delete-all-data',
        [
          'Please go to Settings -> Data -> Delete All Data to delete all your data, including but not limited to all your saved notes in all lists, all your created lists, and all your settings. This will only remove all your data, not your account. You will still be able to sign in.',
        ],
      ],
    ],
  },
  {
    'path': '/import-export',
    'title': 'Import & Export',
    'sections': [
      [
        '',
        '',
        [
          'You can import data from a zip file and export all your data from the server to your device in a zip file.',
        ],
      ],
      [
        'Import Data',
        'import-data',
        [
          'Import data from a zip file. The zip file can be exported from note-taking apps like Google Keep and Evernote (as multiple web pages (.html) and manually zip the folder), as well as from our website/app. Please go to Settings -> Data -> Import Data and choose a zip file.',
        ],
      ],
      [
        'Export All Data',
        'export-all-data',
        [
          'Export all your data from the server to your device in a zip file. Please go to Settings -> Data -> Export All Data and choose the Export All My Data button.',
        ],
      ],
    ],
  },
  {
    'path': '/note-taking-app-101',
    'title': 'Note-Taking App',
    'sections': [
      [
        '',
        '',
        [
          'Note-taking apps empower you to digitally write down thoughts, ideas, lists, reminders, or anything else you want to remember or keep track of. These apps differ from bookmark managers or read-later apps, as they are for different objectives. Note-taking apps also differ from word processors, though both have overlapping functionality.',
        ],
      ],
      [
        'What is a Note-Taking App?',
        'what-is-a-note-taking-app',
        [
          'A note-taking app is a software application or web service designed to help users efficiently take, store, and organize their notes. These apps are like digital notebooks where you can write down thoughts, ideas, lists, reminders, or anything else you want to remember or keep track of. Popular note-taking apps include Evernote, OneNote, Notion, Google Keep, and Apple Notes. Each app has unique features, so your choice depends on your simplicity, organization, or multimedia support needs.',
        ],
      ],
      [
        'Using a Note-Taking App Offers Several Benefits',
        'using-a-note-taking-app-offers-several-benefits',
        [
          'Text Formatting: Allows you to format text with bold, italics, headings, bullet points, etc.',
          'Multimedia Support: Many apps let you add images, links, voice recordings, and even videos to notes.',
          'Organization: You can categorize notes using folders, tags, or notebooks, which makes finding notes easier.',
          'Synchronization: Most note-taking apps sync across devices so you can access your notes from anywhere.',
          'Collaboration: Some apps allow sharing notes and collaborating with others in real-time.',
        ],
      ],
      [
        'Security Risks of Note-Taking Apps',
        'security-risks-of-note-taking-apps',
        [
          'While convenient, note-taking apps come with potential security and privacy risks. Here are a few key concerns to keep in mind:',
          'Lack of End-to-End Encryption: Some apps may not use end-to-end encryption, meaning your data is decrypted on their servers and could be accessed by unauthorized parties, including app administrators.',
          "Weak Password Protection: If you don't use a robust and unique password for your account, it's easier for attackers to break into it, primarily if two-factor authentication (2FA) is not supported.",
          'Insecure Data Storage on Devices: Notes stored locally on a device could be vulnerable if the device is lost, stolen, or hacked. Without proper device security, anyone accessing the device could view your notes.',
          "Insecure Syncing Over Networks: If the app doesn't use secure methods to sync data (like SSL/TLS), your notes could be intercepted during transmission, especially on public Wi-Fi networks.",
          "Data Breaches: If a note-taking app's servers are breached, your data could be exposed. This is particularly concerning if your notes contain personal or sensitive information.",
          'Third-Party Integrations and API Vulnerabilities: Many note-taking apps integrate with other applications, such as cloud storage or task management tools. Weaknesses in these integrations could expose your data to third parties.',
          'Inadequate User Access Control: For apps with collaboration features, insufficient control over who can view, edit, or share notes can lead to accidental exposure of sensitive information.',
          'Permissions Overreach: Some note-taking apps request unnecessary access to device storage, contacts, or other data. If not properly managed, this access could lead to data leakage.',
        ],
      ],
      [
        'Factors to Consider and Best Practices for a Secure Note-Taking App',
        'factors-to-consider-and-best-practices-for-a-secure-note-taking-app',
        [
          'Choose Apps with End-to-End Encryption: Look for apps that support end-to-end encryption to ensure data is encrypted before it leaves your device.',
          'Use Strong Passwords and 2FA: Use a unique, strong password and enable two-factor authentication if available.',
          'Limit Sensitive Information: Avoid storing highly sensitive information in note-taking apps unless necessary.',
          'Use VPN on Public Wi-Fi: If you need to access your notes over public networks, consider using a VPN for added security.',
          'Review App Permissions: Only grant the necessary permissions. Be wary of apps that request access to data or functions unrelated to note-taking.',
        ],
      ],
      [
        'Note-Taking App Integration and Compatibility',
        'note-taking-app-integration-and-compatibility',
        [
          "A crucial factor to consider when choosing a secure note-taking app is its integration capabilities and compatibility across different platforms and tools. Cross-platform support ensures seamless access to your notes from any device or operating system, whether you're using a desktop computer, laptop, tablet, or smartphone. This flexibility is precious in today's multi-device environment, allowing you to pick up where you left off without being tied to a single device.",
          'Additionally, many note-taking apps offer browser extensions or plugins that seamlessly integrate with popular web browsers like Google Chrome, Mozilla Firefox, Safari, and others. These extensions provide a convenient way to save notes directly from your browser, eliminating the need to switch between applications. They often include features like search functionality and easy access to your notes.',
          'When evaluating note-taking apps, consider the platforms and tools you commonly use and prioritize those that offer native support or robust integration capabilities. This seamless integration can significantly enhance your productivity and ensure a consistent experience across all your devices and workflows.',
          'Note-Taking App Backup and Sync Options',
          'Reliable backup and sync capabilities are essential for a secure note-taking app. Data loss can be devastating, wiping out your carefully curated notes accumulated over years. A robust backup strategy ensures you can recover your data in case of hardware failure, software issues, or accidental deletion.',
          'Most note-taking apps offer automatic backup features, allowing you to schedule regular backups to a local drive, cloud storage, or both. Local backups provide an extra layer of protection against online threats, while cloud backups offer remote access and redundancy.',
          'Sync options are equally crucial, keeping your notes up-to-date across multiple devices and ensuring a seamless experience. Many note-taking apps sync data in real time, instantly reflecting changes made on one device across all connected platforms. This feature is precious for those who access their notes from various devices, such as desktop computers, laptops, tablets, and smartphones.',
          'When evaluating note-taking apps, consider their backup and sync capabilities closely. Look for options that allow you to customize backup schedules, storage locations, and sync intervals. Additionally, consider apps that offer end-to-end encryption for backups and sync data, ensuring your notes remain secure even if the backup or sync servers are compromised.',
        ],
      ],
    ],
  },
  {
    'path': '/text-editor-categories-101',
    'title': 'Text Editor Categories',
    'sections': [
      [
        '',
        '',
        [
          'In the digital age, tools for writing, organizing, and managing information are essential for personal and professional productivity. Three popular categories of such tools are word processors (e.g., Microsoft Word), block-based editors (e.g., Notion), and note-taking apps (e.g., Justnote). While these tools share some similarities, they serve distinct purposes and cater to different user needs.',
        ],
      ],
      [
        'Overview',
        'overview',
        [
          'A word processor is used to create, edit, and format documents. Microsoft Word is a well-known example in this category. It is commonly used for professional documents such as reports, letters, and resumes.',
          'A block-based editor organizes content into individual blocks. Each block can be a text editor, a table that pulls data from a database, or media content such as videos. Notion is a well-known example of this type of editor. It is particularly suited for users seeking a customizable workspace for notes, tasks, and wikis.',
          'A note-taking app is designed to capture, organize, and sync notes across devices. Justnote is an example in this category, excelling at collecting ideas, organizing them using lists and tags, and ensuring seamless synchronization across devices for both personal and professional purposes.',
        ],
      ],
      [
        'Similarities',
        'similarities',
        [
          'Despite their differences, word processors, block-based editors, and note-taking apps share some common ground:',
          'Text Editing: All three categories enable users to create and edit text, supporting basic formatting options such as bold, italics, and bullet points.',
          'Cross-Platform Availability: Each tool is accessible on multiple platforms, including iOS, Android, and web browsers.',
          'Cloud Syncing: They offer cloud-based storage, ensuring documents or notes are accessible across devices.',
          'Productivity Focus: They aim to streamline workflows, whether for document creation, project management, or note organization.',
        ],
      ],
      [
        'Differences',
        'differences',
        [
          'The tools differ in their functionalities to address different use cases.',
          'Purpose and Workflow',
          "A word processor focuses on linear document creation with a strong emphasis on formatting and printing. It's best suited for structured, formal documents, such as contracts or academic papers.",
          "A block-based editor emphasizes modularity and flexibility, using a block-based system where text, images, tables, and databases can be rearranged in a single workspace. It's suited for dynamic projects, such as team wikis or personal knowledge bases.",
          "A Note-taking app is designed for quick note-taking and information capture. It's ideal for collecting and organizing ideas on the go.",
          'User Interface',
          'A word processor features a traditional, toolbar-heavy interface with robust formatting options. It can feel complex for casual users but is intuitive for document-focused tasks.',
          'A block-based editor offers a clean, minimalist interface with drag-and-drop blocks. Its flexibility can be overwhelming for new users due to its extensive customization options.',
          'A note-taking app provides a straightforward, note-centric interface with a focus on searchability and tagging. It’s less customizable but simpler for quick note-taking.',
          'Collaboration and Sharing',
          'A word processor supports real-time collaboration with robust version history and commenting features. It’s ideal for teams working on polished documents.',
          'A block-based editor excels in collaborative workspaces, allowing teams to build shared databases, task boards, and wikis. Its sharing model is highly customizable but can be complex to manage.',
          'A note-taking app might offer basic sharing for notes but is less focused on real-time collaboration.',
        ],
      ],
      [
        'Use Case Recommendations',
        'use-case-recommendations',
        [
          'Choose a word processor if you need to create polished, professional documents with precise formatting, such as reports, resumes, or legal documents. It’s the best choice for traditional word processing in corporate or academic settings.',
          'Choose a block-based editor if you want a flexible, all-in-one tool for managing projects, notes, and databases. It’s perfect for teams or individuals who need a customizable workspace for planning, collaboration, or personal knowledge management.',
          'Choose a note-taking app if you prioritize quick note-taking and organizing ideas. It’s ideal for users who need a simple, searchable system for personal notes or research.',
        ],
      ],
      [
        'Conclusion',
        'conclusion',
        [
          'Word processors, block-based editors, and note-taking apps are powerful tools that share overlapping functionality but have distinct needs. A word processor excels in creating formal, print-ready documents; a blocked-base editor shines as a versatile, modular workspace for dynamic projects; and a note-taking app is unmatched for quick, searchable note-taking. Each has its strengths and weaknesses, and the best choice depends on your specific goals—whether it’s producing professional documents, managing complex projects, or capturing fleeting ideas. By understanding their unique features, you can select the tool (or combination of tools) that enhances your productivity and fits your workflow.',
        ],
      ],
    ],
  },
  {
    'path': '/faqs',
    'title': 'FAQs',
    'sections': [
      [
        'General',
        'general',
        [
          'How is Justnote different from Evernote, Google Keep & Apple Notes?',
          'Justnote is a privacy-focused note-taking app that offers end-to-end encryption with an encryption key only you know. Our app encrypts everything, including all your saved notes, and only you can decrypt them and see the content inside.',
          'What are the benefits of using Justnote?',
          'Your account cannot be locked, banned, or deleted by anyone, as it is cryptographically generated. Your Secret Key is required to access and modify it.',
          'No one can see the content inside your data, as everything is encrypted. Your data cannot be used to create targeted ads, and if your data is stolen, no information is leaked.',
          'You can manage your data and set permissions directly, as you can host your own data server or choose any data server provider.',
          'What do you mean by encrypting everything?',
          'Every file generated to store your data is encrypted, such as a file of a saved note and its information or a file of your app settings.',
          'How does end-to-end encryption work in Justnote?',
          'Our app encrypts your data on your device with your Secret Key. Only your encrypted content leaves your device to be stored on servers. At the same time, your Secret Key always stays in your device, ensuring that only you know your Secret Key. No one can see the content inside your encrypted content because only your Secret Key can decrypt it. Your encrypted data must be downloaded to your device to decrypt and access the content inside.',
          'What are the benefits and drawbacks of only me knowing my Secret Key?',
          "It guarantees that only you can decrypt your data and see its content. But if you lose your Secret Key, it'll be lost forever, and no one can help you recover it.",
          'Do you store any data about my usage or run analytics?',
          'No, we take data privacy very seriously. There are no trackers, cookies, or fingerprinting done.',
          'Does Justnote work on both web and mobile platforms?',
          'Yes. Our web app supports Chrome, Firefox, Safari, and similar browsers on desktops, smartphones, and tablets. We also have an iOS app on the App Store and an Android app on Google Play.',
          'Is Justnote open source?',
          'Yes, our source code is published on GitHub.',
        ],
      ],
      [
        'Pricing',
        'pricing',
        [
          'How much does Justnote cost?',
          'Justnote is free, and we offer a simple, no-tricks subscription plan to unlock all extra features. Unlocking all extra features is around $4.99 per year with a 14-day free trial.',
          'What is the catch of the free tier? How long will it be free?',
          'Our business model is to create a lean, useful piece of software that grows with our users and can sustain us from every angle. The way everything is set up allows us to do that. If no one uses our service, it costs us almost nothing to run. If we have a lot of users, costs will go up, and so will revenue.',
          "We intend to keep all the current free features free forever and never show advertisements. We believe if our service is valuable, our users will support us. We wouldn't force it in any way. If users aren't ready, they can always close the popup and continue using our service.",
          'Does Justnote show ads?',
          "No, we do not show ads. We intend to never show advertisements. We don't rent, sell, or share your information with other companies. Our optional paid subscription is the only way we make money.",
          'Can I cancel my subscription at any time?',
          'Yes, you can cancel your subscription anytime, no questions asked. You will still have access to extra features until your subscription expires.',
          'Do you offer a refund?',
          'No, we do not offer refunds, but you will be charged only after a 14-day trial period.',
          'What happens after my subscription expires?',
          'Everything will be the same, except you cannot use extra features. All existing data from extra features, such as pins or tags, will be there. You can also manage them but cannot create a new one.',
          'Lifetime plan?',
          "We're sorry, but we don't currently have a lifetime plan. We'll consider it. Our service has ongoing expenses, and we must be cautious with our pricing model for a sustainable business.",
          'Can I pay in BTC, ETH, STX, etc?',
          "We're sorry, but it's not possible right now. Our company relies on payment processing services for sale taxes and account booking.",
          "We'll keep an eye on it. Our payment processing services are constantly adding new payment methods (we believe cryptocurrencies are also in consideration). When they're available, we'll enable them in our app ASAP.",
          "I've subscribed, but I can't find it?",
          'If you visit Justnote and extra features are still locked, please go to Settings -> Subscription -> Restore purchases. If the issue persists, please feel free to contact us.',
        ],
      ],
      [
        'Sign Up and Sign In',
        'sign-up-and-sign-in',
        [
          'What information is required for sign up?',
          'Nothing. We offer an anonymous sign-up; no personal information, such as an email address or credit card, is required.',
          "What's a Secret Key?",
          "A Secret Key acts like a password. You use it to access your account, and it's used to encrypt/decrypt your data. It's generated when you sign up and is only known to you, ensuring that only you can decrypt your data and see the content inside.",
          "You sign in on different devices with them. Make sure to save them somewhere safe. If you lose these words, you'll lose your account.",
          'Where should I save my Secret Key?',
          'Save your Secret Key in a place where only you can find it. For example:',
          'A password manager such as Bitwarden',
          'Your notes app, protected with a password',
          "Written down and kept somewhere safe\nDon't save it anywhere others can find it or on a website you do not trust. Anybody with your Secret Key will have access to your data.",
          "Why don't I have a password?",
          'Your Secret Key is your password. Multiple words are needed for the encryption mechanism and to prevent brute-force attacks.',
          'What if I lose my Secret Key?',
          "If you lose your Secret Key, it'll be lost forever. Only you know your Secret Key to ensure that only you can decrypt your data, which means no one can help you recover it.",
          'When will I need my Secret Key?',
          "You'll need your Secret Key to access your account, such as when you sign in on different devices, such as your new phone or laptop.",
          'Can I change or reset my Secret Key?',
          "Your Secret Key cannot be changed or reset. As it's used to encrypt your content file by file, if you change your Secret Key, every file needs to be decrypted with your old Secret Key and encrypted again with your new Secret Key.",
          'What can I do if I lose my Secret Key?',
          "If you've signed in on any device and you can still access it, we recommend:",
          'Export all your data (Settings -> Data -> Export All Data)',
          'Create a new account',
          'Import your data from the exported file (Settings -> Data -> Import Data)',
        ],
      ],
      [
        'Features',
        'features',
        [
          'Can I create new folders and subfolders or lists and nested lists?',
          'Yes, please go to Settings -> Lists. You can create a new list and move it into any list.',
          'Does Justnote have a dark mode/dark theme?',
          "Yes, we do. You need to sign in first, and you can change the app's appearance in Settings -> Misc. Our dark is dark grey, not true black or AMOLED black.",
          'Can I create and share a link to my note?',
          "We're sorry it's impossible now. All data are encrypted, and only you can decrypt them and see the content inside. We'll also need to consider laws and regulations. As a company, we might need to block or remove some content. (We don't want to, but we need to comply.)",
          'Can I print or share my note as a PDF?',
          "Yes. On the web, please select the note's options menu and choose View as Webpage. On mobile, please select the note's options menu and choose Export as PDF or Share.",
          'Can I attach images, audio, PDFs, or docs?',
          "You can insert images in Justnote by choosing an image icon in the text editor toolbar. We don't support other attachment types like PDF yet, but we'll look into it.",
        ],
      ],
    ],
  },
];