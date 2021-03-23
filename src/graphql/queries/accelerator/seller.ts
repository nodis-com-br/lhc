import { gql } from '@apollo/client';

export const SELLER_QUERY = gql`
  query seller {
    seller {
      id
      name
      logoUrl
      stockSecurityFactor
      status
      takeRate
      type
      agentEmail
      headOffice
      corporateName
      workingHours
      mcc
      internalEmail
      stateRegistration
      stateRegistrationIsActive
      cnpjIsActive
      documents {
        number
        type
      }
      segments {
        name
      }
      financialData {
        bankCode
        branch
        branchDigit
        currentAccount
        currentAccountDigit
      }
      contacts {
        name
        phoneNumber
        email
        type
      }
      address {
        street
        number
        complement
        postalCode
        state
        city
        neighborhood
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
