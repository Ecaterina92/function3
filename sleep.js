let getSleepHours = day => {
    if(day === 'monday') {
        return 7;
    } else if (day === 'tuesday') {
        return 6;
    }
    else if (day === 'wednesday') {
        return 7;
    }
    else if (day === 'thursday') {
        return 6;
    }
    else if (day === 'friday') {
        return 8;
    }
    else if (day === 'saturday') {
        return 7;
    }
    else if (day === 'sunday') {
        return 5;

    } else return 'Error';
}
console.log(getSleepHours('monday'));

const getActualSleepHours = () => 7 + 6 + 7 + 6 + 8 + 7 + 5;
  
  console.log(getActualSleepHours());

const getIdealSleepHours = () => {
    const idealHours = 9;
    return idealHours * 7;

}
console.log(getIdealSleepHours(9));

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(9);
    if(actualSleepHours === idealSleepHours) {
        console.log('Perfect amount of sleep');
    } else if(actualSleepHours > idealSleepHours) {
        console.log(`More sleep than needed. You are sleeping ${actualSleepHours - idealSleepHours} more hours than you need`);
    } else if(actualSleepHours < idealSleepHours) {
        console.log(`Get some rest. You are getting ${idealSleepHours - actualSleepHours} less hours than you need`);
    }
    }

calculateSleepDebt();

