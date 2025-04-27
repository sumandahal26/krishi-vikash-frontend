import React from 'react';
import { View, Text, StyleSheet, Linking, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const LoanSchemesPage = () => {
  const schemesData = [
    {
      name: "Mukhya Mantri Krishi Sa Sajuli Yojana (MMKSSY)",
      url: "https://agriculture.assam.gov.in",
      objectives: [
        "Promote farm mechanization for cultivation of different crops",
        "Transfer technology to farmer's fields",
        "Increase production and productivity through farm mechanization",
        "Increase profitability while saving labor and time",
        "Promote scientific cultivation practices"
      ],
      benefits: "Financial assistance of ₹5000 to each farmer for procuring farm tools/implements",
      implementation: "Direct Benefit Transfer (DBT) to beneficiaries' accounts",
      selection: "District Level Committee headed by the Deputy Commissioner selects beneficiaries",
      eligibility: [
        "Only small and marginal farmers",
        "Beneficiary must be >21 years old",
        "Involved in cultivation for ≥3 consecutive years",
        "Resident farmer",
        "KCC card holders eligible",
        "Must have live bank account",
        "Only one farmer per family eligible",
        "Tenant farmers/share croppers may be considered (min. 1 acre/3 bighas)"
      ]
    },
    {
      name: "Assam Tractor Scheme",
      url: "https://agriculture.assam.gov.in",
      purpose: "Provide tractors to Scheduled Tribe farmers through groups for efficient farming",
      benefits: "70% subsidy (max ₹5.5 Lakhs) for selected groups",
      implementation: [
        "Banks provide 20% as loan",
        "Applicant group pays remaining 10%"
      ]
    },
    {
      name: "Kisan Credit Card (KCC)",
      url: "https://www.rbi.org.in",
      objectives: "Provide timely credit for production needs, contingency expenses, and ancillary activities",
      features: {
        type: "Revolving cash credit account",
        loanAmount: "Need-based (considering cropping pattern, acreage, Scale of Finance)",
        margin: "Nil",
        repayment: "As per crop period (Short/Long) and marketing period",
        security: {
          primary: "Hypothecation of crops/assets created from loan",
          collateral: "Mortgage of land (waived for ≤₹2L, ≤₹3L with tie-up)"
        },
        interestSubvention: "3% p.a. for prompt repayment (up to ₹3L)",
        tenure: "5 years (10% annual limit increase subject to review)",
        insurance: [
          "Coverage under PMFBY (premium payment)",
          "Personal Accident Insurance recommended"
        ]
      },
      eligibility: [
        "Owner cultivators (individual/joint)",
        "Tenant farmers, oral lessees, share croppers",
        "SHGs/Joint Liability Groups"
      ],
      documents: [
        "Application Form + 2 photos",
        "ID proof (Aadhar/Voter ID/Passport/etc)",
        "Address proof",
        "Land holding proof",
        "Cropping pattern with acreage",
        "Security docs for loans >₹2L/₹3L"
      ],
      interestRate: [
        "≤₹3L: 7% p.a. (with interest subvention)",
        ">₹3L: As applicable"
      ],
      processingFee: [
        "≤₹3L: Nil",
        ">₹3L: 0.35% + GST"
      ],
      faqs: [
        {
          question: "What's covered under KCC?",
          answer: "Cultivation expenses, post-harvest needs, consumption requirements, agri investments"
        },
        {
          question: "Loan limits?",
          answer: "No ceiling - need-based on cropping pattern and acreage"
        }
      ]
    },
    {
      name: "Kisan Samriddhi Rin",
      url: "https://www.nabard.org",
      purpose: "Provide end-to-end farming credit to corporate farmers/large farmers using scientific methods",
      features: {
        type: "Agriculture cash credit",
        loanAmount: {
          min: "₹5L",
          max: "₹50Cr",
          basis: "Realistic cost of end-to-end farming"
        },
        repayment: "As per harvesting/marketing period",
        security: {
          primary: "Hypothecation of crops/assets",
          collateral: [
            "For <₹50L: 125% coverage (min 25% SARFAESI/liquid)",
            "OR 200% coverage (LTV max 50%)",
            "For ≥₹50L: 125% coverage (min 25% SARFAESI/liquid)"
          ]
        }
      },
      eligibility: [
        "Progressive/scientific farmers (min 4 acres or scientific methods)",
        "Credit score ≥650 (no history also eligible)",
        "Age ≥18 (co-borrower needed if >60)",
        "Corporates: 2 years profit (audited/actual)"
      ],
      documents: [
        "KYC documents",
        "Loan application",
        "Land ownership/lease proof",
        "Cropping pattern with acreage"
      ],
      interestRate: [
        "<₹50L: 1.80% above 1-Year MCLR",
        "≥₹50L: Based on Credit Risk Assessment"
      ]
    }
  ];

  const openWebsite = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  const renderItemList = (items) => {
    if (!items) return null;
    if (!Array.isArray(items)) return <Text style={styles.listItem}>• {items}</Text>;
    return items?.map((item, index) => (
      <Text key={index} style={styles.listItem}>• {item}</Text>
    ));
  };

  const renderFAQ = (faqs) => {
    if (!faqs || !Array.isArray(faqs)) return null;
    return faqs.map((faq, index) => (
      <View key={index} style={styles.faqItem}>
        <Text style={styles.faqQuestion}>Q: {faq.question}</Text>
        <Text style={styles.faqAnswer}>A: {faq.answer}</Text>
      </View>
    ));
  };

  const renderFeatures = (features) => {
    if (!features) return null;
    return Object.entries(features).map(([key, value], index) => {
      if (typeof value === 'object' && !Array.isArray(value)) {
        return (
          <View key={index}>
            <Text style={styles.detailTitle}>{key}:</Text>
            {renderFeatures(value)}
          </View>
        );
      } else if (Array.isArray(value)) {
        return (
          <View key={index}>
            <Text style={styles.detailTitle}>{key}:</Text>
            {renderItemList(value)}
          </View>
        );
      } else {
        return (
          <Text key={index} style={styles.detailText}>
            <Text style={{fontWeight: 'bold'}}>{key}:</Text> {value}
          </Text>
        );
      }
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Assam Government Loan Schemes</Text>
      
      {schemesData.map((scheme, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>{scheme.name}</Text>
          
          {scheme.objectives && (
            <View style={styles.detailSection}>
              <Text style={styles.detailTitle}>Objectives:</Text>
              {renderItemList(scheme.objectives)}
            </View>
          )}
          
          {scheme.purpose && (
            <View style={styles.detailSection}>
              <Text style={styles.detailTitle}>Purpose:</Text>
              <Text style={styles.detailText}>{scheme.purpose}</Text>
            </View>
          )}
          
          {scheme.benefits && (
            <View style={styles.detailSection}>
              <Text style={styles.detailTitle}>Benefits:</Text>
              <Text style={styles.detailText}>{scheme.benefits}</Text>
            </View>
          )}
          
          {scheme.implementation && (
            <View style={styles.detailSection}>
              <Text style={styles.detailTitle}>Implementation:</Text>
              {Array.isArray(scheme.implementation) ? 
                renderItemList(scheme.implementation) : 
                <Text style={styles.detailText}>{scheme.implementation}</Text>}
            </View>
          )}
          
          {scheme.selection && (
            <View style={styles.detailSection}>
              <Text style={styles.detailTitle}>Selection Process:</Text>
              <Text style={styles.detailText}>{scheme.selection}</Text>
            </View>
          )}
          
          {scheme.eligibility && (
            <View style={styles.detailSection}>
              <Text style={styles.detailTitle}>Eligibility:</Text>
              {renderItemList(scheme.eligibility)}
            </View>
          )}
          
          {scheme.features && (
            <View style={styles.detailSection}>
              <Text style={styles.detailTitle}>Features:</Text>
              {renderFeatures(scheme.features)}
            </View>
          )}
          
          {scheme.documents && (
            <View style={styles.detailSection}>
              <Text style={styles.detailTitle}>Documents Required:</Text>
              {renderItemList(scheme.documents)}
            </View>
          )}
          
          {scheme.interestRate && (
            <View style={styles.detailSection}>
              <Text style={styles.detailTitle}>Interest Rate:</Text>
              {renderItemList(scheme.interestRate)}
            </View>
          )}
          
          {scheme.processingFee && (
            <View style={styles.detailSection}>
              <Text style={styles.detailTitle}>Processing Fee:</Text>
              {renderItemList(scheme.processingFee)}
            </View>
          )}
          
          {scheme.faqs && (
            <View style={styles.detailSection}>
              <Text style={styles.detailTitle}>FAQs:</Text>
              {renderFAQ(scheme.faqs)}
            </View>
          )}
          
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => openWebsite(scheme.url)}
          >
            <Text style={styles.buttonText}>Official Website</Text>
            <FontAwesome5 name="open-in-new" size={16} color="white" />
          </TouchableOpacity>
          
          {index < schemesData.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2980b9',
    marginBottom: 15,
  },
  detailSection: {
    marginBottom: 15,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 5,
  },
  detailText: {
    fontSize: 15,
    color: '#7f8c8d',
    lineHeight: 20,
    marginBottom: 3,
  },
  listItem: {
    fontSize: 15,
    color: '#7f8c8d',
    marginLeft: 5,
    lineHeight: 20,
  },
  faqItem: {
    marginBottom: 10,
  },
  faqQuestion: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 2,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#7f8c8d',
    lineHeight: 20,
    marginLeft: 10,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#ecf0f1',
    marginVertical: 20,
  },
});

export default LoanSchemesPage;