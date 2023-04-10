export interface IVkUserData {
  id:                string;
  bdate:             string;
  bdate_visibility:  number;
  city:              ICity;
  country:           ICountry;
  timezone:          number;
  photo_200:         string;
  photo_max_orig:    string;
  sex:               number;
  photo_100:         string;
  first_name:        string;
  last_name:         string;
  can_access_closed: boolean;
  is_closed:         boolean;
}

export interface ICity {
  id:    number;
  title: string;
}

export interface ICountry {
  id:    number;
  title: string;
}

export interface IDegreesData {

}

export interface IWinner {
  first_name: string;
  photo_200 : string;
  amount : string
  time : Date
}
