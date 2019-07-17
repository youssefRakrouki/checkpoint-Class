import Human from './class';
import './App.css';

class Student extends  Human{

constructor(name,job,skills){
super();
this.name=name;
this.job=job;
this.skills=skills;

}
}
const me = new Student(this.name="Youssef", this.job="student", this.skills=["football","coding"])


console.log(me);
me.getJob('developer');
console.log(me);
me.leaveJob();
console.log(me);
me.learnNewSkill('box');
console.log(me);
me.forgetSkill('box');

  


export default App;
