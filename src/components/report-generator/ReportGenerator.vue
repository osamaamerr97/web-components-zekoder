<template>
  <div>
    <slot></slot>
    <button @click="createReport">Download Report</button>

  </div>
</template>

<script>
//   import yaml from 'js-yaml';
  import * as data from '../../assets/test.json';
  import {saveAs} from 'file-saver';
  import { Document, Packer, Paragraph, ImageRun, TextRun, Table, SectionType, HeadingLevel } from "docx";

  const headingLevels = [HeadingLevel.TITLE, HeadingLevel.HEADING_1, HeadingLevel.HEADING_2, HeadingLevel.HEADING_3, HeadingLevel.HEADING_4, HeadingLevel.HEADING_5, HeadingLevel.HEADING_6 ]


  export default {
    name: 'ReportGenerator',
    props: ['yml', 'fileName', 'backgroundColor'],
    methods: {
        saveDocxFile( doc, filename) {
            const mimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
            Packer.toBlob(doc).then(blob => {
                const docblob = blob.slice(0, blob.size, mimeType);
                saveAs(docblob, this.fileName || filename);
            });
        },
        createReport() {
            let docSections = [];
            let sections = data.default.sections;
            if(sections&&Object.keys(sections).length){
                Object.keys(sections).forEach((section)=> {
                    let sectionObj = {};
                    let sec = sections[section];
                    sectionObj.children = [new Paragraph({ 
                        text: section,
                        heading: HeadingLevel.HEADING_1
                    })
                    ];
                    sectionObj.properties = {
                        type: SectionType.CONTINUOUS,
                    };
                    let looper = (parent,col,row) => {
                        if(col) {
                            if(col == 'rows') {
                                Object.keys(parent[col]).forEach((row) => {
                                    looper(parent[col],null,row);
                                });
                            }
                            else {
                                sectionObj.children.push(new Paragraph({ 
                                    text: col,
                                    heading: HeadingLevel.HEADING_2
                                }));
                                if(parent[col].rows && Object.keys(parent[col].rows).length) {
                                    Object.keys(parent[col].rows).forEach((row)=> {
                                        looper(parent[col].rows,null,row);
                                    });
                                }
                                else if(Object.keys(parent[col]).length && Object.keys(parent[col]).length==1) {
                                    looper(parent[col],null,Object.keys(parent[col])[0])
                                }
                            }
                        }
                        else if(row) {
                            if(row == 'columns') {
                                Object.keys(parent[row]).forEach((col)=> {
                                    looper(parent[row],col,null);
                                });
                            }
                            else if(row == 'blocks') {
                                if(Array.isArray(parent[row])) {
                                    parent[row].forEach((block) => {
                                        this.addBlockContent(block, sectionObj.children);
                                    });
                                }
                                else {
                                    this.addBlockContent(parent[row], sectionObj.children);
                                }
                            }
                            else {
                                sectionObj.children.push(new Paragraph({ 
                                    text: row,
                                    heading: HeadingLevel.HEADING_3
                                }));
                                if(parent[row].columns && Object.keys(parent[row].columns).length) {
                                    Object.keys(parent[row].columns).forEach((col)=> {
                                        looper(parent[row].columns,col,null);
                                    });
                                }
                                else if(parent[row].blocks){
                                    if(Array.isArray(parent[row].blocks)) {
                                        parent[row].blocks.forEach((block) => {
                                            this.addBlockContent(block, sectionObj.children);
                                        });
                                    }
                                    else {
                                        this.addBlockContent(parent[row].blocks, sectionObj.children);
                                    }
                                }
                            }
                        }
                    }
                    if(sec.columns && Object.keys(sec.columns).length){
                        Object.keys(sec.columns).forEach((column)=> {
                            looper(sec.columns,column,null,null);
                        });
                    }
                    else if(Object.keys(sec).length && Object.keys(sec).length==1) {
                        looper(sec,Object.keys(sec)[0],null)
                    }
                    
                    docSections.push(sectionObj);
                });
            }
            let doc = new Document({
                sections: docSections,
                background: {
                    color: this.backgroundColor || "ffffff"
                }
            });
                    
            this.saveDocxFile(doc, 'mydoc.docx')
        },
        addBlockContent(block, sectionChildren){
            console.log("block: ",block);
            sectionChildren.push(new Paragraph("block"));
            if(block.heading) {
                sectionChildren.push(new Paragraph({ 
                    text: block.heading.text,
                    heading: block.heading.level ? headingLevels[block.heading.level] : headingLevels[1]
                }));
            }
            if(block.placeholder) {
                sectionChildren.push(new Paragraph({ 
                    children: [
                        new TextRun({
                            text: "",
                            break: block.placeholder.height,
                        })
                    ]
                }));
            }
            if(block.text) {
                sectionChildren.push(new Paragraph({ 
                    text: block.text.text
                }));
            }
            if(block.html) {
                sectionChildren.push(new Paragraph({ 
                    text: block.html.content
                }));
            }
            if(block.image) {
                sectionChildren.push(new Paragraph({ 
                    children: [
                        new ImageRun({
                            data: block.image.url,
                            transformation: { width: block.image.width, height: block.image.height}
                        })
                    ]
                }));
            }
            if(block.table) {
                
                sectionChildren.push(new Table({
                    rows: []
                }));
            }
        }
    },
    created() {
        // let fs = new FileReader();
        // fs.onload = (e) => {
        //     let bstr = e.target.result;
        //     console.log(bstr);
            
        // }
        // fs.readAsText(this.yml, 'utf8')

        // fetch("/assets/test.yml")
        // .then( response => {
        //     console.log(response);
        // })
    }
  }
</script>

<style></style>