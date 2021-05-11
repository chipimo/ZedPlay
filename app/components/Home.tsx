import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';

const licenseKey = require('license-key-gen');

const dateNow = new Date(); // Creating a new date object with the current date and time
const year = dateNow.getFullYear();

export default function Home(): JSX.Element {
  const [LicenseKey, setLicenseKey] = React.useState('');
  const [Name, setName] = React.useState('');
  const [Phone, setPhone] = React.useState('');
  const [City, setCity] = React.useState('');

  return (
    <div style={{ width: '100%', height: '100%', marginTop: 20 }}>
      <h2>Licence creator</h2>
      <div style={{ width: '80%', marginTop: 20, margin: 'auto' }}>
        <div style={{ width: '60%', padding: 10 }}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Company Name"
            variant="outlined"
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div style={{ width: '60%', padding: 10 }}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="City"
            variant="outlined"
            value={City}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>
        <div style={{ width: '60%', padding: 10 }}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            value={Phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div style={{ marginLeft: 10 }}>
          <Button
            variant="outlined"
            onClick={() => {
              const userInfo = {
                company: Name,
                city: City,
                phone: Phone,
                year,
              };
              const licenseData = {
                info: userInfo,
                prodCode: 'LEN100120',
                appVersion: '1.5',
                osType: 'IOS8',
              };

              // console.log(userInfo);


              try {
                const license = licenseKey.createLicense(licenseData);
                // console.log(license);
                setLicenseKey(license.license);
              } catch (err) {
                console.log(err);
              }
            }}
          >
            {' '}
            Create
          </Button>
        </div>

        <div style={{ color: '#3b3b3b', marginTop: 10 }}>
          <Typography variant="h6">{`License Key: ${LicenseKey}`}</Typography>
        </div>
      </div>
    </div>
  );
}
