package org.example;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVPrinter;

import java.io.FileWriter;
import java.io.PrintWriter;
import java.util.Collection;
import java.util.List;

public class Writer {
  private String file;
  List<Tree<Disease>> diseaseTreeList;

  //CSV Writer

  public Writer(String file,  List<Tree<Disease>> diseaseTreeList) {
    this.file = file;
    this.diseaseTreeList = diseaseTreeList;
  }

  public void load() {

    try (PrintWriter printWriter = new PrintWriter(this.file)) {
      for(Tree tree: diseaseTreeList){
        printWriter.println(print(tree));
      }
    } catch (Exception e) {
      System.out.println("Error " + e.getMessage());
    }
  }

  public static String print(Tree<Disease> root) {
    String s = "Disease: " +root.data.toString() ;
    for (int i = 0; i < root.children.size(); i++) {
      s +=  "\n" + " Types of diseases: "  +root.children.get(i).data ;
      for (int j = 0; j < root.children.get(i).children.size(); j++) {
        s +=  "\n " + " SubTypes of diseases: "+ root.children.get(i).children.get(j).data;
      }
    }
    return s;
  }
}
