'use client';

import React, { useState } from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

interface QuoteFormData {
  step: number;
  insuranceType: string;
  name: string;
  email: string;
  phone: string;
  postalCode: string;
}

interface InsuranceType {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const INSURANCE_TYPES: InsuranceType[] = [
  {
    id: 'auto',
    name: 'Auto Insurance',
    description: 'Car, truck, motorcycle, or RV coverage',
    icon: '🚗',
  },
  {
    id: 'home',
    name: 'Home Insurance',
    description: 'House, condo, or renter protection',
    icon: '🏠',
  },
  {
    id: 'life',
    name: 'Life Insurance',
    description: 'Term, whole life, or universal life',
    icon: '❤️',
  },
  {
    id: 'business',
    name: 'Business Insurance',
    description: 'Commercial property and liability',
    icon: '💼',
  },
  {
    id: 'travel',
    name: 'Travel Insurance',
    description: 'Trip, emergency, and medical coverage',
    icon: '✈️',
  },
  {
    id: 'disability',
    name: 'Disability Insurance',
    description: 'Income protection and benefits',
    icon: '🛡️',
  },
];

export default function GetQuotesPage() {
  const [formData, setFormData] = useState<QuoteFormData>({
    step: 1,
    insuranceType: '',
    name: '',
    email: '',
    phone: '',
    postalCode: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInsuranceTypeSelect = (typeId: string) => {
    setFormData({
      ...formData,
      insuranceType: typeId,
      step: 2,
    });
    setErrors({});
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Postal code is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitted(true);
      setFormData({
        step: 1,
        insuranceType: '',
        name: '',
        email: '',
        phone: '',
        postalCode: '',
      });

      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      setErrors({ form: 'Failed to submit quote request. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const getSelectedType = () => {
    return INSURANCE_TYPES.find((t) => t.id === formData.insuranceType);
  };

  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#1a365d] to-[#0d9488] text-white py-16">
        <PageWrapper>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-gray-100">
              Find the best insurance coverage for your needs in just a few minutes.
            </p>
          </div>
        </PageWrapper>
      </div>

      <PageWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <Card className="border-green-200 bg-green-50">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="mb-4 text-6xl">✓</div>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-green-700 mb-4">
                      Your quote request has been submitted successfully. One of our insurance experts will contact you within 24 hours.
                    </p>
                    <p className="text-green-600 text-sm">
                      Check your email for a confirmation and quote estimate.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <>
                {/* Step Indicator */}
                <div className="mb-8">
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        'w-10 h-10 rounded-full flex items-center justify-center font-bold text-white',
                        formData.step >= 1
                          ? 'bg-[#0d9488]'
                          : 'bg-gray-300'
                      )}
                    >
                      1
                    </div>
                    <div className="flex-1 h-1 bg-gray-300"></div>
                    <div
                      className={cn(
                        'w-10 h-10 rounded-full flex items-center justify-center font-bold text-white',
                        formData.step >= 2
                          ? 'bg-[#0d9488]'
                          : 'bg-gray-300'
                      )}
                    >
                      2
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <span className="font-semibold text-[#1a365d]">
                      {formData.step === 1 ? 'Select Coverage Type' : 'Your Contact Info'}
                    </span>
                  </div>
                </div>

                {/* Step 1: Insurance Type Selection */}
                {formData.step === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#1a365d] mb-6">
                      What type of insurance do you need?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {INSURANCE_TYPES.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => handleInsuranceTypeSelect(type.id)}
                          className={cn(
                            'p-6 rounded-lg border-2 transition-all text-left hover:shadow-lg',
                            'border-gray-200 hover:border-[#0d9488] hover:bg-blue-50'
                          )}
                        >
                          <div className="text-4xl mb-2">{type.icon}</div>
                          <h3 className="text-lg font-semibold text-[#1a365d] mb-1">
                            {type.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {type.description}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Information */}
                {formData.step === 2 && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                        <p className="text-sm text-[#1a365d] font-semibold">
                          Selected Coverage: <span className="text-[#0d9488]">{getSelectedType()?.name}</span>
                        </p>
                      </div>

                      <h2 className="text-2xl font-bold text-[#1a365d] mb-6">
                        Tell us about yourself
                      </h2>

                      <div className="space-y-4">
                        <Input
                          label="Full Name"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleInputChange}
                          error={errors.name}
                          required
                        />

                        <Input
                          label="Email Address"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          error={errors.email}
                          required
                        />

                        <Input
                          label="Phone Number"
                          name="phone"
                          type="tel"
                          placeholder="(123) 456-7890"
                          value={formData.phone}
                          onChange={handleInputChange}
                          error={errors.phone}
                          required
                        />

                        <Input
                          label="Postal Code"
                          name="postalCode"
                          type="text"
                          placeholder="M5H 3S5"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          error={errors.postalCode}
                          required
                        />

                        {errors.form && (
                          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                            <p className="text-red-700 text-sm">{errors.form}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setFormData({ ...formData, step: 1 })}
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        variant="primary"
                        disabled={isLoading}
                        className="flex-1"
                      >
                        {isLoading ? 'Submitting...' : 'Get My Free Quote'}
                      </Button>
                    </div>

                    <p className="text-xs text-gray-500 text-center">
                      We respect your privacy. Your information will only be used to provide insurance quotes.
                    </p>
                  </form>
                )}
              </>
            )}
          </div>

          {/* Sidebar */}
          <div>
            {/* Why Choose Us */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Why Get a Quote?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <svg className="w-5 h-5 text-[#0d9488] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">Free, no-obligation quotes</span>
                  </li>
                  <li className="flex gap-2">
                    <svg className="w-5 h-5 text-[#0d9488] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">Personalized coverage options</span>
                  </li>
                  <li className="flex gap-2">
                    <svg className="w-5 h-5 text-[#0d9488] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">Expert guidance included</span>
                  </li>
                  <li className="flex gap-2">
                    <svg className="w-5 h-5 text-[#0d9488] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">Compare top Canadian insurers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Average time to quote</p>
                    <p className="text-2xl font-bold text-[#1a365d]">24 hours</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Insurers we work with</p>
                    <p className="text-2xl font-bold text-[#0d9488]">25+</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Satisfied customers</p>
                    <p className="text-2xl font-bold text-[#f59e0b]">50,000+</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
