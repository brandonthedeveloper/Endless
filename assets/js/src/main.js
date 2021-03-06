const apiUrl = 'https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge';
//const apiUrl = '/api.json';
var app = new Vue({
    el: '#app',
    mounted () {
        steps: this.apiCall()

    },
    methods: {
        apiCall: function() {
            var self = this;
            axios
            .get(apiUrl)
            .then(response => (res = response.data))
            .then(res => {
                if (res.error) {
                    this.errors.push(res.error);
                } else {
                    // SET ARRAY TO HOLD REORDERED OBJECTS
                    var retAry = res;
                    var aryLen = retAry.length;

                    for (var i = 0; i < aryLen; i++) {
                        retAry[i].stepNumber = "0" + retAry[i].stepNumber;
                    }

                    retAry.sort(function(a, b) {
                        return parseInt(a.stepNumber) - parseInt(b.stepNumber);
                    });

                    // SORT BY STEPNUMBER
                    retAry.sort();

                    //console.log(retAry);
                    self.steps = retAry;
                }
            });
        }
    },
    data: {
        steps: []
    }
})
