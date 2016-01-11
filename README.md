# ![Clipperz icon][icon] JAVASCRIPT CRYPTO LIBRARY - by Clipperz

The JavaScript Crypto Library provides web developers with an extensive and efficient set of cryptographic functions. The library aims to obtain maximum execution speed while preserving modularity and reusability. 

ALL the code included in this project, if not otherwise stated, is released with the **BSD 3-Clause License** (see `LICENSE.txt`), and all rights are reserved to Clipperz Srl.

For any use not allowed by the license, please [contact us][contact].


## Features
The Javascript Crypto Library currently includes:

* AES-256, symmetric encryption;
* Fortuna, a strong pseudo-random number generator;
* SRP, a verifier-based authentication protocol;
* SHA-2, hash function.

[Clipperz online password manager][clipperz] makes heavy use of the above cryptographic functions. 

Browser cryptography is an critical component for building [zero-knowledge web applications][zkwa], but you can also use it to improve the security of specific portion of your code. As an example, you could consider replacing your present user authentication process with SRP.


## Acknowledgments

Javascript implementations of cryptographic algorithms have been around for years. Some of the pioneers in this field were: [John Walker][walker], [Chris Veness][veness], [Paul Andrew Johnston][johnston] and [Leemon Baird][baird]. They all realized that Javascript could turn the browser into a new and ubiquitous “number crunching” tool that comes pre-installed on every modern computer. Even if they mostly wrote code for educational purposes, their work was an important inspiration to us.


## Future developments

Basically we need to make the library more flexible and more powerful. Most functions need parameters for selecting the key length, the encoding options, …

Public-key cryptography is an area that definitely needs to be covered. The code already includes a first attempt to use elliptic curve cryptography (ECC), but it is still very slow and incomplete. We would love to improve it and develop all the components of a robust public-key cryptographic system based on elliptic curves. It’s an ambitious and complex plan. Any volunteer to help?


## Contributions

Your contributions to the Javascript Crypto Library are very welcome! In order to avoid jeopardizing the ownership of the code base, we will require every developer to sign the Clipperz [Contributor Agreement][CA]

This enables a single entity to represent the aggregated code base and gives the community flexibility to act as a whole to changing situations.

The CA establishes a joint copyright assignment in which the contributor retains copyright ownership while also granting those rights to Clipperz Srl. With the CA in place, the aggregated code base within any Clipperz open source project is protected by both the distribution license and copyright law.

Please [download][CA] and review the Contributor Agreement for a complete understanding of its terms and conditions. You may send your signed and completed CA to Clipperz by scanning your completed form and emailing the image or by fax. Please retain a copy for your records. **Thanks!**

[icon]: http://0.gravatar.com/avatar/2a9fae49ced80a42830a206f88ea1022?size=100
[clipperz]: https://clipperz.is 
[contact]: https://clipperz.is/contact
[zkwa]: https://clipperz.is/users/marco/blog/2007/08/24/anatomy_zero_knowledge_web_application
[walker]: http://www.fourmilab.ch/javascrypt/
[veness]: http://www.movable-type.co.uk/
[johnston]: http://pajhome.org.uk/
[baird]: http://www.leemon.com
[CA]: https://clipperz.is/contributor_agreement/

