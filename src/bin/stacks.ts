#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from '@aws-cdk/core'
import WebHost from 'lib/WebHost'

const app = new cdk.App()
new WebHost(app, 'BillResumeWebHost', {
    env: {
        region: 'us-east-1',
        account: '829151516027',
    },
    apexDomain: 'billjohnston.co',
    certificateArn:
        'arn:aws:acm:us-east-1:829151516027:certificate/39154a87-4c3d-485e-82d6-2f6ab86f1e64',
})
