Siminov ORM (Object Relationship Mapping) - Template Application
===================================================

Siminov ORM Framework
------------

Siminov ORM is an Object/Relational Mapping solution for Android environments. It maps data from an object model representation to a relational data model representation (and visa versa). 

Siminov ORM not only takes care of the mapping from Java classes to database tables (and from Java data types to SQL data types), but also provides data query and retrieval facilities. 


About Application
-----------------
This template application provides a basic idea about using Siminov ORM Framework.

This application shows different type of Liquor's available in market and their basic information. (Eg: Wine, Beer, Whiskey, Votka, etc).


Setting Up Application 
----------------------

- Download Siminov jar from http://siminov.github.com/andiorm/builds.html
- Add Siminov jar into your application libs folder.

***

![Siminov Template Application] (https://raw.github.com/Siminov/andiorm/doc-resources/document-resources/siminov_template_application_add_siminov_jar.png "Siminov Template Application")

***

Application Configuration
-------------------------

- <b>1. Application Descriptor - ApplicationDescriptor.si.xml</b>

```xml
<siminov>

 <property name="name">SIMINOV TEMPLATE</property>	
	<property name="description">Siminov Template Application</property>
	<property name="version">0.9</property>

	<property name="load_initially">true</property>

	<!-- DATABASE-DESCRIPTORS -->
	<database-descriptors>
		<database-descriptor>DatabaseDescriptor.si.xml</database-descriptor>
	</database-descriptors>

	
	<!-- SIMINOV EVENTS -->
	<event-handlers>
	    <event-handler>siminov.orm.template.events.SiminovEventHandler</event-handler>
	    <event-handler>siminov.orm.template.events.DatabaseEventHandler</event-handler>
	</event-handlers>
		
</siminov>

```

- <b>2. Database Descriptor - DatabaseDescriptor.si.xml</b>

```xml

<database-descriptor>

 <property name="database_name">SIMINOV-TEMPLATE</property>
	<property name="description">Siminov Template Database Config</property>
	<property name="is_locking_required">true</property>
	<property name="external_storage">false</property>
	<property name="database_implementer"></property>
	<property name="password"></property>

	<database-mappings>
		<database-mapping path="Liquor-Mappings/Liquor.si.xml" />
		<database-mapping path="Liquor-Mappings/LiquorBrand.si.xml" />
	</database-mappings>

	<libraries>
		<library>siminov.library.template.resources</library>
	</libraries>

</database-descriptor>


```

- <b>3. Database Mapping Descriptor - Liquor.si.xml</b>

```xml
<database-mapping>

 <table table_name="LIQUOR" class_name="siminov.orm.template.model.Liquor">
		
		<column variable_name="liquorType" column_name="LIQUOR_TYPE">
			<property name="type">java.lang.String</property>
			<property name="primary_key">true</property>
			<property name="not_null">true</property>
			<property name="unique">true</property>
		</column>		

		<column variable_name="description" column_name="DESCRIPTION">
			<property name="type">java.lang.String</property>
		</column>

		<column variable_name="history" column_name="HISTORY">
			<property name="type">java.lang.String</property>
		</column>

		<column variable_name="link" column_name="LINK">
			<property name="type">java.lang.String</property>
			<property name="default">www.wikipedia.org</property>
		</column>

		<column variable_name="alcholContent" column_name="ALCHOL_CONTENT">
			<property name="type">java.lang.String</property>
		</column>

		<index name="LIQUOR_INDEX_BASED_ON_LINK" unique="true">
			<column>HISTORY</column>
		</index>

		<relationships>

		    <one-to-many refer="liquorBrands" refer_to="siminov.orm.template.model.LiquorBrand" on_update="cascade" on_delete="cascade">
				<property name="load">true</property>
			</one-to-many>		
		    
		</relationships>
											
	</table>

</database-mapping>		

```

Save
------

```java
	Liquor beer = new Liquor();
	beer.setLiquorType("Beer");
	beer.setDescription("Beer Description");
	beer.setHistory("Beer History");
	beer.setLink("Beer Web Link");
	beer.setAlcholContent("Beer Alchol Content");

	try {
		beer.save();
	} catch(DatabaseException databaseException) {
		//Log It.
	}

```

Update
-------

```java
	Liquor beer = new Liquor();
	beer.setLiquorType("Beer");
	beer.setDescription("Beer Description");
	beer.setHistory("Beer History");
	beer.setLink("Beer Web Link");
	beer.setAlcholContent("Beer Alchol Content");

	try {
		beer.update();
	} catch(DatabaseException databaseException) {
		//Log It.
	}

```

Save Or Update
--------------

```java
	Liquor beer = new Liquor();
	beer.setLiquorType("Beer");
	beer.setDescription("Beer Description");
	beer.setHistory("Beer History");
	beer.setLink("Beer Web Link");
	beer.setAlcholContent("Beer Alchol Content");

	try {
		beer.saveOrUpdate();
	} catch(DatabaseException databaseException) {
		//Log It.
	}

```

Delete
------

```java
	Liquor beer = new Liquor();
	beer.setLiquorType("Beer");
	beer.setDescription("Beer Description");
	beer.setHistory("Beer History");
	beer.setLink("Beer Web Link");
	beer.setAlcholContent("Beer Alchol Content");

	try {
		beer.delete();
	} catch(DatabaseException databaseException) {
		//Log It.
	}

````


LICENSE
-------

 
<b> SIMINOV FRAMEWORK </b>
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


[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/90f3c9974d385c03c29020dfcf76b869 "githalytics.com")](http://githalytics.com/Siminov/andiorm-template)
