
class Human{
name;  
job ;
skills=[];

getJob(x)
{
    this.job=x
}
leaveJob() 
{
this.job="unemployed"
}
learnNewSkill(skill)
{
    this.skills.push(skill)
}
forgetSkill(skill)
{
let index = this.skills.indexOf(skill)
this.skills.splice(index,1)
}
}

export default Human;