export function getVaildParams(params) {
  let newParams = {};
  Object.entries(params).forEach(([key, value]) => {
    if (![null, undefined].includes(value)) {
      newParams[key] = value;
    }
  });
  return newParams;
}

export const checkPhone = (rule, value, callback) => {
  if (value === '') {
    return callback(new Error('请输入手机号码'));
  } else {
    var reg = /^1\d{10}$/;
    if (reg.test(value)) {
      callback();
    } else {
      return callback(new Error('手机号码格式不正确'));
    }
  }
};

export const Storage = {
  setSessionItem: (key, val) => {
    sessionStorage.setItem(key, JSON.stringify(val));
  },
  getSessionItem: key => {
    const value = sessionStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  },

  setLocalItem: (key, val) => {
    localStorage.setItem(key, JSON.stringify(val));
  },

  getLocalItem: key => {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  },
};
