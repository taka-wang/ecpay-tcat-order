var express = require('express')
, dateTime = require('node-datetime')
, bodyParser = require('body-parser')
, querystring = require('query-string')
, randomstring = require("randomstring")
, app = express()

//configure body-parser for express
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});

app.post('/create', function(req, res) {
    var response = {
        AllPayLogisticsID: randomstring.generate({length: 5, charset: 'numeric' }),
        BookingNote: randomstring.generate({length: 10, charset: 'numeric' }),
        CheckMacValue: "599CC69E67389311908A2166A18A4BC4",
        CVSPaymentNo: "",
        CVSValidationNo: "",
        GoodsAmount: req.body.GoodsAmount,
        LogisticsSubType: req.body.LogisticsSubType,
        LogisticsType: req.body.LogisticsType,
        MerchantID: req.body.MerchantID,
        MerchantTradeNo: req.body.MerchantTradeNo ? req.body.MerchantTradeNo : "GW" + randomstring.generate({length: 16, charset: 'numeric' }),
        ReceiverAddress: req.body.ReceiverAddress,
        ReceiverCellPhone: req.body.ReceiverCellPhone,
        ReceiverEmail: req.body.ReceiverEmail,
        ReceiverName: req.body.ReceiverName,
        ReceiverPhone: req.body.ReceiverPhone,
        RtnCode: 300,
        RtnMsg: "訂單處理中(已收到訂單資料)",
        UpdateStatusDate: dateTime.create().format('Y/m/d H:M:S')
    };
    console.log(req.body);
    res.send("1|" + querystring.stringify(response, {encode: false}));
});

var server = app.listen(8888, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("listening at http://%s:%s", host, port);
});