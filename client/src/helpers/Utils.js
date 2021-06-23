import { defaultDirection } from '../constants/defaultValues';
import axios from "axios";
import jwt_decode from "jwt-decode";

export const mapOrder = (array, order, key) => {
  array.sort(function (a, b) {
    const A = a[key];
    const B = b[key];
    if (order.indexOf(`${A}`) > order.indexOf(`${B}`)) {
      return 1;
    }
    return -1;
  });
  return array;
};

export const getDateWithFormat = () => {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; // January is 0!

  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  return `${dd}.${mm}.${yyyy}`;
};

export const getCurrentTime = () => {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`;
};

export const getDirection = () => {
  let direction = defaultDirection;
  if (localStorage.getItem('direction')) {
    const localValue = localStorage.getItem('direction');
    if (localValue === 'rtl' || localValue === 'ltr') {
      direction = localValue;
    }
  }
  return {
    direction,
    isRtl: direction === 'rtl',
  };
};

export const setDirection = (localValue) => {
  let direction = 'ltr';
  if (localValue === 'rtl' || localValue === 'ltr') {
    direction = localValue;
  }
  localStorage.setItem('direction', direction);
};


export const setAuthToken = token => {
  if (token) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const checkAuthenticated = token => {
  if (!token) return;
  const date = new Date().getTime() / 1000;
  const data = jwt_decode(token);
  return date < data.exp;
}

export const getUserId = token => {
  if (!token) return;
  const decodeToken = jwt_decode(token);
  return decodeToken.id;
}

export const bytesToSize = bytes => {
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

export const downloadFile = (path, original_name) => {
	let a = document.createElement('a');
  a.href = 'https://apirender-dashboard-bucket-2020-sep.s3.amazonaws.com/' + path;
	a.download = original_name;
	a.click();
}

export const updateUser = (user) => {
  let currentUser = JSON.parse(localStorage.getItem('user'));
  currentUser.avatar = user.avatar;
  currentUser.email = user.email;
  currentUser.name = user.first_name + " " + user.last_name;
  currentUser.role = user.role;
  localStorage.setItem('user', JSON.stringify(currentUser));
}