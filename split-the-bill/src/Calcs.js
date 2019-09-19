import React, { useState, useEffect } from 'react';
import { Form, Field } from 'formik';

const [totalPrice, setTotalPrice] = useState()

const [people, setPeople] = useState()

const [splitPrice, setSplitPrice] = useState()

// math goes here