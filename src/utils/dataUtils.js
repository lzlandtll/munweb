const DateUtils = {
    // 格式化日期为指定格式
    formatDate(date, format) {
        const pad = (n) => (n < 10 ? `0${n}` : n.toString());
        const year = date.getFullYear();
        const month = pad(date.getMonth() + 1);
        const day = pad(date.getDate());
        const hours = pad(date.getHours());
        const minutes = pad(date.getMinutes());
        const seconds = pad(date.getSeconds());

        format = format.replace('yyyy', year);
        format = format.replace('MM', month);
        format = format.replace('dd', day);
        format = format.replace('HH', hours);
        format = format.replace('mm', minutes);
        format = format.replace('ss', seconds);

        return format;
    },

    // 获取当前日期时间
    getCurrentDateTime() {
        return this.formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss');
    },

    // 将日期字符串解析为日期对象
    parseDate(dateString) {
        const parts = dateString.split(/[- :]/);
        return new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]);

    },
};

export default DateUtils;
