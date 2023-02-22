package org.example;

import java.util.ArrayList;
import java.util.List;

public class Tree<Disease> {

    public Disease data;
    public List<Tree<Disease>> children;

    public Tree(){
        this.data = data;
        children = new ArrayList<>();
    }

    public Disease getData() {
        return data;
    }

    public void setData(Disease data) {
        this.data = data;
    }

    public List<Tree<Disease>> getChildren() {
        return children;
    }

    public void setChildren(List<Tree<Disease>> children) {
        this.children = children;
    }
}
