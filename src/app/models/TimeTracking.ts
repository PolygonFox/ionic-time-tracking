import * as moment from 'moment'

export default class TimeTracking {
    title: String;
    startTime: moment.MomentInput;
    endTime: String;

    constructor(title: string, startTime: string, endTime: string) {
        this.title = title;
        this.startTime = moment(startTime);
        this.endTime = endTime;
    }

    hasEnded() {
        return !!this.endTime;
    }

    getTimeWorkedOn() {
        return moment((moment().diff(this.startTime))).format('hh:mm:ss');
    }
}