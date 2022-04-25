import Vector from "../maths/Vector";
import Player from "../player/Player";
import WorldMap from "../world/WorldMap";

export default class GameState {

    private _players: Player[];
    private _playerNames: string[];
    private _map: WorldMap;

    constructor() {
        this._players = [];
        this._playerNames = [];
        this._map = new WorldMap(15000);
    }

    private getSpawnPosition(): Vector | null {
        for (let i = 0; i < 150; i++) {
            const theta = Math.random() * 2 * Math.PI;
            const radius = this._map.getSize * Math.sqrt(Math.random());
            const spawnPoint = new Vector(radius * Math.cos(theta), radius * Math.sin(theta));
            
            const notInsideAnyShape = this._players.filter(player => player.getShape.containsPoint(spawnPoint)).length === 0;

            if (notInsideAnyShape) {
                return spawnPoint;
            }
        }

        return null;
    }

    addPlayer(player: Player): boolean {
        if (!this._playerNames.includes(player.getName)) {
            const playerPosition = this.getSpawnPosition();

            if (!playerPosition) {
                return false;
            }

            player.setPosition = playerPosition;
            this._players.push(player);
            this._playerNames.push(player.getName);
            return true;
        } else {
            return false;
        }
    }

    removePlayer(name: string): boolean {
        if (this._playerNames.includes(name)) {
            this._playerNames = this._playerNames.filter(n => n !== name);
            this._players = this._players.filter(player => player.getName !== name);

            return true;
        }
        return false;
    }

    /**
     * Update game logic
     */
    update(): void {
        // TODO: Implement update game logic
    }

    get getPlayers(): Player[] {
        return this._players;
    }

    get getWorldMap(): WorldMap {
        return this._map;
    }
}