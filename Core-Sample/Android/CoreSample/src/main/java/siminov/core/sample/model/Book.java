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


package siminov.core.sample.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

import siminov.core.database.Database;

public class Book extends Database implements Serializable {

    //Table Name
    transient public static final String TABLE_NAME = "BOOK";

    //Column Names
    transient public static final String TITLE = "TITLE";
    transient public static final String DESCRIPTION = "DESCRIPTION";
    transient public static final String AUTHOR = "AUTHOR";
    transient public static final String LINK = "LINK";

    //Book Types
    transient public static final String BOOK_TITLE_C = "C";
    transient public static final String BOOK_TITLE_C_PLUS = "C++";
    transient public static final String BOOK_TITLE_C_SHARP = "C#";
    transient public static final String BOOK_TITLE_JAVA = "JAVA";
    transient public static final String BOOK_TITLE_JAVA_SCRIPT = "JAVA_SCRIPT";
    transient public static final String BOOK_TITLE_OBJECTIVE_C = "OBJECTIVE-C";
    transient public static final String BOOK_TITLE_SWIFT = "SWIFT";


    //Variables
    private String title = null;
    private String description = null;
    private String author = null;
    private String link = null;

    private Pricing pricing = null;

    private Collection<Lession> lessions = new ArrayList<Lession>();

    //Methods

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAuthor() {
        return this.author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getLink() {
        return this.link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public Pricing getPricing() {
        return this.pricing;
    }

    public void setPricing(Pricing pricing) {
        this.pricing = pricing;
    }

    public void addLession(Lession lession) {
        this.lessions.add(lession);
    }

    public Iterator<Lession> getLessions() {
        return this.lessions.iterator();
    }

    public void setLessions(Iterator<Lession> lessions) {

        while(lessions.hasNext()) {
            this.lessions.add(lessions.next());
        }
    }
}
