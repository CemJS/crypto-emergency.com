import { initMap } from 'cemjs-all'
import cemconfig from './cemconfig.json'
import microFrontends from './microFrontends.json'
import services from './services.json'

cemconfig.microFrontends = microFrontends
cemconfig.services = services
export default function () {
    initMap(cemconfig)
}