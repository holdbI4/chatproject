import {makeAutoObservable} from "mobx";

class SidebarStore{
    isOpen=false;
    isModalOpen=false;
    constructor() {
        makeAutoObservable(this);
    }
    setOpen=(isOpen:boolean)=>{
        this.isOpen=isOpen
    }
    setModalOpen=(isModalOpen:boolean)=>{
        this.isModalOpen=isModalOpen
    }
}
const sidebarStore=new SidebarStore()
export default  sidebarStore