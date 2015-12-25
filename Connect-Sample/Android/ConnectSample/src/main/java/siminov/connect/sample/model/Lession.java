/**
 * [SIMINOV FRAMEWORK]
 * Copyright [2015] [Siminov Software Solution LLP|support@siminov.com]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/


package siminov.connect.sample.model;

import java.io.Serializable;

import siminov.core.database.Database;

public class Lession extends Database implements Serializable {

    //Table Name
    public static final String TABLE_NAME = "LESSION";

    //Column Names
    public static final String BOOK_TITLE = "TITLE";
    public static final String NAME = "NAME";
    public static final String DESCRIPTION = "DESCRIPTION";
    public static final String LINK = "LINK";

    //Brands

    /*
     * C Lessions
     */
    public static final String C_FIRST_LESSION = "First Lession";
    public static final String C_SECOND_LESSION = "Second Lession";


    /*
     * C++ Brands
     */
    public static final String C_PLUS_FIRST_LESSION = "First Lession";
    public static final String C_PLUS_SECOND_LESSION = "Second Lession";


    /*
     * C# Brands
     */
    public static final String C_SHARP_FIRST_LESSION = "First Lession";
    public static final String C_SHARP_SECOND_LESSION = "Second Lession";


    /*
     * Java Brands
     */
    public static final String JAVA_FIRST_LESSION = "First Lession";
    public static final String JAVA_SECOND_LESSION = "Second Lession";


    //JavaScript - Bourbons Brands
    public static final String JAVA_SCRIPT_FIRST_LESSION = "First Lession";
    public static final String JAVA_SCRIPT_SECOND_LESSION = "Second Lession";


    //Objective-C Brands
    public static final String OBJECTIVE_C_FIRST_LESSION = "First Lession";
    public static final String OBJECTIVE_C_SECOND_LESSION = "Second Lession";


    //SWIFT Brands
    public static final String SWIFT_FIRST_LESSION = "First Lession";
    public static final String SWIFT_SECOND_LESSION = "Second Lession";


    //Variables
    private Book book = null;
    private String name = null;
    private String description = null;
    private String link = null;


    //Methods

    public Book getBook() {
        return this.book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLink() {
        return this.link;
    }

    public void setLink(String link) {
        this.link = link;
    }

}
