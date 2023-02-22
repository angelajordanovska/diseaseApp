package org.example;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

import java.io.BufferedReader;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;

import java.util.List;


public class FileReader {

  private List<Disease> diseaseList;

  public FileReader() {
    this.diseaseList = new ArrayList<>();
  }

  public List<Disease> getList(String fileName) {

    try {
      BufferedReader file = Files.newBufferedReader(Paths.get(fileName), StandardCharsets.UTF_8);
      CSVParser recordsIT = new CSVParser(file, CSVFormat.EXCEL.withDelimiter(';').withTrim().withRecordSeparator("\r\n"));
      for (CSVRecord record : recordsIT) {
        this.diseaseList.add(new Disease(
            record.get(0).replaceAll("\\D", ""),
            record.get(7),
            record.get(8)));
      }
    } catch (Exception e) {
      System.out.println("Error " + e.getMessage());
    }
    return diseaseList;
  }


  public String toString() {
    return this.diseaseList.toString();
  }
}
