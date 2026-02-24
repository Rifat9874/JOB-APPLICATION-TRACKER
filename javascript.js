
var jobs = [
  { id:1, company:"Mobile First Corp", role:"React Native Developer", location:"Remote", type:"Full-time", salary:"$130,000 - $175,000", description:"Build cross-platform mobile applications using React Native. Work on products used by millions worldwide.", status:"not_applied" },
  { id:2, company:"WebFlow Agency", role:"Web Designer & Developer", location:"Los Angeles, CA", type:"Part-time", salary:"$80,000 - $120,000", description:"Create stunning web experiences for high-profile clients. Portfolio and modern design skills required.", status:"not_applied" },
  { id:3, company:"TechFlow", role:"Frontend Engineer", location:"San Francisco, CA", type:"Full-time", salary:"$140,000 - $180,000", description:"Lead the frontend development of our core SaaS product using React and Tailwind.", status:"not_applied" },
  { id:4, company:"CloudScale", role:"Backend Developer", location:"Seattle, WA", type:"Full-time", salary:"$150,000 - $190,000", description:"Develop scalable microservices using Node.js and AWS infrastructure.", status:"not_applied" },
  { id:5, company:"Designedly", role:"UI/UX Designer", location:"New York, NY", type:"Contract", salary:"$90,000 - $110,000", description:"Design user-centric interfaces for mobile and web applications.", status:"not_applied" },
  { id:6, company:"DataDrive", role:"Data Scientist", location:"Austin, TX", type:"Full-time", salary:"$135,000 - $170,000", description:"Apply machine learning models to solve complex business problems and drive growth.", status:"not_applied" },
  { id:7, company:"SecureNet", role:"Security Analyst", location:"Remote", type:"Full-time", salary:"$120,000 - $160,000", description:"Monitor and protect our cloud networks from vulnerabilities and threats.", status:"not_applied" },
  { id:8, company:"GrowthOps", role:"Marketing Specialist", location:"Chicago, IL", type:"Full-time", salary:"$70,000 - $95,000", description:"Manage digital marketing campaigns and optimize conversion funnels.", status:"not_applied" },
  { id:9, company:"AI Innovations", role:"ML Engineer", location:"Remote", type:"Full-time", salary:"$165,000 - $210,000", description:"Implement large language models for enterprise productivity tools.", status:"not_applied" },
  { id:10, company:"Pixel Perfect", role:"Senior UX Researcher", location:"London, UK", type:"Contract", salary:"$100,000 - $130,000", description:"Conduct user testing and accessibility audits for global e-commerce platforms.", status:"not_applied" },
  { id:11, company:"Cyber Shield", role:"DevSecOps Engineer", location:"Remote", type:"Full-time", salary:"$155,000 - $195,000", description:"Integrate security protocols into CI/CD pipelines and cloud infrastructure.", status:"not_applied" },
  { id:12, company:"GreenTech", role:"Full Stack Developer", location:"Portland, OR", type:"Full-time", salary:"$125,000 - $160,000", description:"Build renewable energy monitoring dashboards with React and Go.", status:"not_applied" }
];


var currentTab = "all";


function updateStatus(id, newStatus){

    for(var i = 0; i < jobs.length; i++){
        if(jobs[i].id == id){
            jobs[i].status = newStatus;
        }
    }

    showJobs();
}