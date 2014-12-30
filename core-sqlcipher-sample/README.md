Siminov Core (Object Relationship Mapping) - SQLCipher Sample Application
==========================================================================

Siminov Core is a open source Object/Relational Mapping solution for Android environments. It maps data from an object model representation to a relational data model representation (and visa versa). 

Siminov Core not only takes care of the mapping from Java classes to database tables (and from Java data types to SQL data types), but also provides data query and retrieval facilities. 

Get Started
-----------
Get the source

  git clone https://github.com/siminov/android-core.git


About SQLCipher
---------------
Data Security plays important role when we talk about database. It protect your database from desctructive forces and the unwanted actions of unauthorized users.

Android SQLite does not provide any protection against your database. There are many third party security implementation's which application developer can use in their application to protect their database.

SQLCipher is an open source extension to SQLite that provides transparent 256-bit AES encryption of database le. SQLCipher has a small footprint and great performance so it's ideal for protecting embedded application databases and is well suited for mobile development.

Siminov provide implementation for SQLCipher database encryption security. Its easy and secured to use it.


Setup Up Application
--------------------

- Download SQLCipher from their website for android (http://sqlcipher.net/ downloads/).
- Configure SQLCipher in your application. Follow below steps:
  - Copy sqlcipher.jar, guava-r09.jar, commons-codec.jar in your application libs folder.

![Siminov SQLCipher Sample Application] (https://raw.github.com/Siminov/android-core/doc-resources/github-wiki-resources/siminov_sample_sqlcipher_application_setup_1.png "Siminov Core SQLCipher Sample Application")
***

  - Copy dll file in your libs folder.

![Siminov SQLCipher Sample Application] (https://raw.github.com/Siminov/android-core/doc-resources/github-wiki-resources/siminov_sample_sqlcipher_application_setup_2.png "Siminov Core SQLCipher Sample Application")
***

  - Copy icudt461.zip in your application assets folder.

![Siminov SQLCipher Sample Application] (https://raw.github.com/Siminov/android-core/doc-resources/github-wiki-resources/siminov_sample_sqlcipher_application_setup_3.png "Siminov Core SQLCipher Sample Application")
***

- Download and copy <a href='https://github.com/Siminov/android-core/blob/db-impl/src/siminov/core/db/impl/sqlcipher/SQLCipherDatabaseImpl.java'>SQLCipherDatabaseImpl</a> class in one of your application's package.  

![Siminov SQLCipher Sample Application] (https://raw.github.com/Siminov/android-core/doc-resources/github-wiki-resources/siminov_sample_sqlcipher_application_sqlcipherdatabaseimpl_class.png "Siminov Core SQLCipher Sample Application")
***

- Configure SQLCipherDatabaseImpl class in DatabaseDescriptor.si.xml file of your application.

![Siminov SQLCipher Sample Application] (https://raw.github.com/Siminov/android-core/doc-resources/github-wiki-resources/siminov_sample_sqlcipher_application_sqlcipherdatabaseimpl_class_configure.png "Siminov Core SQLCipher Sample Application")
***

> <b>Note</b>
> - For any future reference you can download SIMINOV-CORE-SQLCIPHER-SAMPLE Application and can check how we have configured application with SQLCipher.

Application Structure
---------------------

![Siminov SQLCipher Sample Application] (https://raw.github.com/Siminov/android-core/doc-resources/github-wiki-resources/siminov_sample_sqlcipher_application_setup.png "Siminov Core SQLCipher Sample Application")



LICENSE
-------

 
 [SIMINOV FRAMEWORK]
 <p>
 Copyright [2013] [Siminov Software Solution|support@siminov.com]
 
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 
    http://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.


[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/f423e443f4fc035eeb0ccf84cb7abdbe "githalytics.com")](http://githalytics.com/Siminov/android-samples)

