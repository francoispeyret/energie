class Stat {
    
    constructor(value,max,unit) {
        this.value = value;
        this.max = max;

        if(typeof unit !== 'undefined') {
            this.unit = unit;
        } else {
            this.unit = '%';
        }

        this.percentValue = null;

        if(this.unit === '%')
            this.setPercentValue();

    }

    get() {
        return this.percentValue;
    }

    getText() {
        if(this.unit === '%' && this.max > 0) {
            return this.percentValue + ' ' + this.unit;
        } else {
            return this.value + ' ' + this.unit;
        }
    }

    setValue(value) {
        this.value = value;
        if(this.max > 0) {
            this.setPercentValue();
        }
    }

    setMax(max) {
        this.max = max;
        if(this.unit === '%')
            this.setPercentValue();
    }

    setPercentValue(value) {
        this.percentValue = ceil((100 * this.value) / this.max);
    }

    getPercentValue() {
        return this.percentValue;
    }

}
