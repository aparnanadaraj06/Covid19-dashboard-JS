/* eslint-disable no-console */
/* eslint-disable function-paren-newline */
/* eslint-disable eol-last */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars, eol-last
import supertest from 'supertest';

import { expect } from 'chai';

const chai = require('chai');
// eslint-disable-next-line import/no-unresolved

// eslint-disable-next-line eol-last
const request = supertest('https://api.coronavirus.data.gov.uk/v1');

describe('Users', () => {
  it('GET /data', async () => {
    const res = await request.get('/data').query({ home: true });
    expect(res.body.data).to.be.not.empty;
    console.log(res.body.data);
  });
  it('GET /data', async () => {
    const res = await request.get('/data').query({ home: true });
    expect(res.body.data).to.be.not.empty;
    expect(res.body.data).that.includes.any.keys(['date', 'areaName', 'areaCode', 'confirmedRate', 'latestBy', 'death', 'deathNew', 'deathRate', 'confirmed']);
  });
});