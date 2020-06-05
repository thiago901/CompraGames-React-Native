import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import api from '../../../services/api';

const { profile } = useSelector((state) => state.user);
