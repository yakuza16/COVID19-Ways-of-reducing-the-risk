import {Common} from './Common.js'

const statisticsArticleSelector = '[data-statistics]';
const dateSelector = '[data-date]';
const allCasesSelector = '[data-all-cases]';
const deathSelector = '[data-death]';
const recoverySelector = '[data-recovered]';
const regex = /,/gi;

const API = 'https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats';


class Statistics extends Common{
    constructor(){
        super(statisticsArticleSelector)
        this.dateElement = super.grabElement(dateSelector);
        this.allCasesElement = super.grabElement(allCasesSelector);
        this.deathCasesElement = super.grabElement(deathSelector);
        this.recoveryCasesElement = super.grabElement(recoverySelector);
        this.publicStatistics();
    }

    publicStatistics(){
        this.dateElement.textContent = this.getNewDate();
        this.getStatistics()
    }

    getNewDate(){
        const now = new Date();
        return now.toDateString();
    }

    getStatistics(){
        fetch(API)
        .then(response => {
            if(!response.ok){
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then(data=>{
        const {total_cases,death_cases,recovery_cases} = data.data;
        this.allCasesElement.textContent = total_cases.replace(regex,' ');
        this.deathCasesElement.textContent = death_cases.replace(regex,' ');
        this.recoveryCasesElement.textContent = recovery_cases.replace(regex,' ');
        })
        .catch(()=>console.log(`Can't access ${API} response. Blocked by browser`))
    }
}

export const stats = () =>window.addEventListener('DOMContentLoaded', ()=>{
    const statistics = new Statistics();
})