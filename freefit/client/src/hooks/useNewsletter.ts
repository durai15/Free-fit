'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';

export function useNewsletter() {
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("You're on the list — thanks for joining!");
    event.currentTarget.reset();
  };

  return { message, handleSubmit };
}
