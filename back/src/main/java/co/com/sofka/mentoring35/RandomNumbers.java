package co.com.sofka.mentoring35;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class RandomNumbers {
    private Date date;
    @Id
    private String id;

    private int number1;

    private int number2;

    private String orginalList;

    private String randomList;

    public String getRandomList() {
        return randomList;
    }

    public int getNumber2() {
      return number2;
    }

    public void setNumber2(int number2) {
      this.number2 = number2;
    }

    public int getNumber1() {
      return number1;
    }

    public void setNumber1(int number1) {
      this.number1 = number1;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getId() {
        return id;
    }

    public void setIde(String id) {
        this.id = id;
    }


    public String getOrginalList() {
        return orginalList;
    }

    public void setOrginalList(String orginalList) {
        this.orginalList = orginalList;
    }

    public void setRandomList(String randomList) {
        this.randomList = randomList;
    }

    
}
