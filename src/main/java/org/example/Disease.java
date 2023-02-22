package org.example;
public class Disease {

    private int lvl;
    private String code;
    private String name;

    public Disease(String lvl, String code, String name) {
        this.lvl = Integer.parseInt(lvl);
        this.code = code;
        this.name = name;
    }

    public int getLvl() {
        return lvl;
    }

    public void setLvl(int lvl) {
        this.lvl = lvl;
    }


    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public String toString(){
        return getName() + ", code: " + getCode() ;
    }


}
