'use strict'
const macosVersion = require('macos-version')
const path = require('path')
const execa = require('execa')

const electronUtil = require('electron-util/node')

const binary = path.join(electronUtil.fixPathForAsarUnpack(__dirname), 'main')

module.exports = async () => {
	macosVersion.assertGreaterThanOrEqualTo('10.11')
	return (await execa.stdout(binary)) === 'true'
}
