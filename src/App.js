import React from 'react';
import Humen from './class';
import './App.css';

export default class Student extends Humen {
  constructor(name,job,skills){
    super();
    this.name=name;
    this.job=job;
    this.skills=skills;
    
    }
    
    }
    
    const me = new Student("Youssef", "student", ["football"])
      
    
    console.log(me);
    me.getJob('developer');
    me.learnNewSkill('java');
    me.leaveJob()
   


