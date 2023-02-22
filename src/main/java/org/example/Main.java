package org.example;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.*;

public class Main {

  public static void main(String[] args) throws IOException {

    FileReader reader = new FileReader();
    List<Disease> diseaseList = reader.getList("src/main/resources/ICD10GM2022_CSV_S_IT_v20211215.csv");

    List<Tree<Disease>> diseaseTreeList = new ArrayList<>();
    Map<String, Tree<Disease>> nodesMap = new HashMap<>();

    for(int i=0; i<diseaseList.size();i++){
      Tree<Disease> diseaseTree = new Tree<>();
      diseaseTree.data = diseaseList.get(i);
      nodesMap.put(diseaseTree.data.getCode(),diseaseTree);
      if(diseaseList.get(i).getLvl()==3){
        diseaseTreeList.add(diseaseTree);
      }else if(diseaseList.get(i).getLvl()>3){
        Tree<Disease> parentTree = nodesMap.get(diseaseList.get(i).getCode().substring(0,diseaseList.get(i).getLvl()-1));
        parentTree.children.add(diseaseTree);
      }
    }


    ObjectMapper mapper = new ObjectMapper();
    String json = mapper.writeValueAsString(diseaseTreeList);

    File file = new File("src/main/resources/outputIT.json");
    FileWriter fileWriter = new FileWriter(file);
    fileWriter.write(json);
    fileWriter.close();
  }

}