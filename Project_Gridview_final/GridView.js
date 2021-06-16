class GridView{
    /**
     * propeties
     * @param [array]_tableClass
     * @param [array] data
     * @param [array] attribute
     * @param [array]_element
     * @param [array]_header
     * @param [array]_headerClass
     */
    constructor(){
        this._header='';
        this._headerClass=[];
        this._tableClass=[];
        this._element='body';
        this.attribute=[];
    }
    /**
     * metod set header
     */

    setHeader(header){
        if (typeof header==='string' && header.trim()!=''){
            this._header=header.trim()
            return true;
        }
        else{
            return false;
        }
    }
    setHeaderClass(headerClass){
        if (typeof headerClass==='object'){
            this._headerClass=headerClass;
            return true;
        }
        else{
            return false;
        }
    }
    /**
     * metod set element
     */
    setElement(element){
        if (document.querySelector(element)){
            this._element=document.querySelector(element);
            return true;
        }else{
            return false;
        }
    }



    /**
     * metod for showGridViewTable
     */
    render(data){
        this.setElement(data.element);
        this.setHeaderClass(data.headerClass);
        this.setHeader(data.header);
        this.attribute=data.attribute;
        this.data=data.data;
        //show header
        if (this._header !=''){
            const header=document.createElement('h1');
            header.textContent=this._header;
            this._headerClass.forEach(cssClass=>{
                header.classList.add(cssClass);
            });
            document.querySelector(this._element).append(header)            
        }

        //show table header (створення шапки таблиці)
        const table=document.createElement('table');
        this._tableClass.forEach(cssClass=>{
            table.classList.add(cssClass);
        });
       
        let trHeader=document.createElement('tr');
        for(let key in this.attribute){
            let th=document.createElement('th');
            if(this.attribute[key].label){
                th.textContent=this.attribute[key].label;
            }else{
                th.textContent=key;
            }
            trHeader.append(th)
        }
        table.append(trHeader);
        // створення вмісту таблиці
        for (let i=0; i<this.data.length;i++){
            let dataArr=this.data[i];
            let tr=document.createElement('tr');
            for (let key in this.attribute){
                let td=document.createElement('td');
                let value=dataArr[key];
                if (this.attribute[key].value){
                    value=this.attribute[key].value(dataArr);
                }
                if(this.attribute[key].src){
                    td.innerHTML=value;
                }else{
                    td.textContent=value;
                }
                tr.append(td);
            }
          table.append(tr);  
        }
        document.querySelector(this._element).append(table);
    }

}