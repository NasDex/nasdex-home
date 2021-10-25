const hasOwnProperty = Object.prototype.hasOwnProperty;

export function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

export function getProtocol() {
  const p = window.location.protocol;
  const h = p.split(":")[0];
  return h;
}

export function getMainHost() {
  let key = `mh_${Math.random()}`;
  let keyR = new RegExp(`(^|;)\\s*${key}=12345`);
  let expiredTime = new Date(0);
  let domain = document.domain;
  let domainList = domain.split(".");

  let urlItems = [];
  urlItems.unshift(domainList.pop());
  while (domainList.length) {
    urlItems.unshift(domainList.pop());
    let mainHost = urlItems.join(".");
    let cookie = `${key}=${12345};domain=.${mainHost}`;

    document.cookie = cookie;

    if (keyR.test(document.cookie)) {
      document.cookie = `${cookie};expires=${expiredTime}`;
      return mainHost;
    }
  }
}

export const autoprefixer = function (style) {
  if (typeof style !== "object") return style;
  const rules = ["transform", "transition", "animation"];
  const prefixes = ["ms-", "webkit-"];
  rules.forEach((rule) => {
    const value = style[rule];
    if (rule && value) {
      prefixes.forEach((prefix) => {
        style[prefix + rule] = value;
      });
    }
  });
  return style;
};

export const timeFormat = (time, type) => {
  let date = getTimeZone(time);
  if (!type) return getYMD(date) + " " + getHMS(date);
  switch (type) {
    case "HMS":
      return getHMS(date);
    case "YMD":
      return getYMD(date);
  }
};

function singleFormat(str) {
  return str.toString().length === 1 ? "0" + str : str;
}

function getYMD(time) {
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let date = time.getDate();
  return year + "-" + singleFormat(month) + "-" + singleFormat(date);
}

function getHMS(time) {
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  return (
    singleFormat(hours) +
    ":" +
    singleFormat(minutes) +
    ":" +
    singleFormat(seconds)
  );
}
function getTimeZone(time) {
  let GTM_8 = 480; // -480
  let date = new Date(time);
  let subMin = date.getTimezoneOffset() + GTM_8;
  date.setMinutes(date.getMinutes() + subMin);
  return date;
}

// 转化为【万】单位(主要用在中文环境下)
export const formatNumW = (num) => {
  if (Number(num) > 10000) {
    return fixD(Number(num) / 10000, 2) + "万";
  }
  return num;
};

// 转化为【百万】单位(主要用在英文环境下)
export const formatNumM = (num) => {
  if (Number(num) > 1000000) {
    return fixD(Number(num) / 1000000, 2) + "M";
  }
  return num;
};

export const isPC = () => {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    // 移动端操作
    return false;
  } else {
    // PC端操作
    return true;
  }
};
